const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const S3Service = require('../services/S3.services');
const crypto = require('crypto');
const axios = require('axios');
const {
  s3,
  BUCKET_NAME,
  BASE_PATH,
  FOLDERS,
  generateUrls,
} = require("../config/S3config");


//---------------------------------------------
// ADD USER
//---------------------------------------------
const addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const exists = await pool.query(
      "SELECT email FROM dotfit.admins WHERE email=$1",
      [email]
    );

    if (exists.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const result = await pool.query(
      `INSERT INTO dotfit.admins (name, email, password, role)
       VALUES ($1,$2,$3,$4)
       RETURNING admin_id, name, email, role`,
      [name, email, password, role]
    );

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Add User Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};



//---------------------------------------------
// GET ALL USERS
//---------------------------------------------
const getUsers = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT admin_id, name, email, role, status, created_at
       FROM dotfit.admins
       ORDER BY created_at DESC`
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Get Users Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};



//---------------------------------------------
// GET USER BY ID
//---------------------------------------------
const getUserById = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT admin_id, name, email, role, status
       FROM dotfit.admins
       WHERE admin_id=$1`,
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Get User Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};



//---------------------------------------------
// UPDATE USER
//---------------------------------------------
const updateUser = async (req, res) => {
  const { name, email, password, role, status } = req.body;

  try {
    const result = await pool.query(
      `UPDATE dotfit.admins
       SET name=$1, email=$2, password=$3, role=$4, status=$5
       WHERE admin_id=$6
       RETURNING admin_id, name, email, role, status`,
      [name, email, password, role, status, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Update User Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};



//---------------------------------------------
// DELETE USER
//---------------------------------------------
const deleteUser = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM dotfit.admins WHERE admin_id=$1 RETURNING admin_id",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error("Delete User Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// --------------------------------------------------
// CREATE BLOG
// --------------------------------------------------
const createBlog = async (req, res) => {
  const client = await pool.connect();

  try {
    const {
      title,
      content,
      category,
      reading_time,
      featured,
      published_at,
    } = req.body;

    if (!title || !content || !category || !reading_time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1️⃣ Insert blog
    const insertResult = await client.query(
      `
      INSERT INTO dotfit.blogs
      (title, content, category, reading_time, featured, published_at)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING blog_id
      `,
      [
        title,
        content,
        category,
        reading_time,
        featured === "true" || featured === true,
        published_at || new Date(),
      ]
    );

    const blogId = insertResult.rows[0].blog_id;
    let imageUrl = null;

    // 2️⃣ Upload image
    if (req.file) {
      const upload = await S3Service.uploadFile(req.file, blogId);
      imageUrl = upload.publicUrl;
    }

    // 3️⃣ Update image
    const final = await client.query(
      `
      UPDATE dotfit.blogs
      SET cover_image = $1
      WHERE blog_id = $2
      RETURNING *
      `,
      [imageUrl, blogId]
    );

    res.status(201).json({
      message: "Blog created successfully",
      blog: final.rows[0],
    });
  } catch (err) {
    console.error("Create Blog Error:", err);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};

const getBlogs = async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM dotfit.blogs ORDER BY published_at DESC`
  );
  res.json(result.rows);
};

const getAllBlogs = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        blog_id,
        title,
        content,
        cover_image,
        category,
        reading_time,
        featured,
        published_at
      FROM dotfit.blogs
      ORDER BY published_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT
        blog_id,
        title,
        content,
        cover_image,
        category,
        reading_time,
        featured,
        published_at
       FROM dotfit.blogs
       WHERE blog_id = $1`,
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Get Blog Error:", error);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};


const updateBlog = async (req, res) => {
  const { blogId } = req.params;

  try {
    const existing = await pool.query(
      "SELECT cover_image FROM dotfit.blogs WHERE blog_id = $1",
      [blogId]
    );

    if (!existing.rows.length) {
      return res.status(404).json({ error: "Blog not found" });
    }

    let imageUrl = existing.rows[0].cover_image;

    if (req.file) {
      const upload = await S3Service.uploadFile(req.file, blogId);
      imageUrl = upload.publicUrl;
    }

    const result = await pool.query(
      `
      UPDATE dotfit.blogs
      SET
        title = COALESCE($1, title),
        content = COALESCE($2, content),
        category = COALESCE($3, category),
        reading_time = COALESCE($4, reading_time),
        featured = COALESCE($5, featured),
        cover_image = $6,
        updated_at = CURRENT_TIMESTAMP
      WHERE blog_id = $7
      RETURNING *
      `,
      [
        req.body.title,
        req.body.content,
        req.body.category,
        req.body.reading_time,
        req.body.featured,
        imageUrl,
        blogId
      ]
    );

    res.json({ message: "Blog updated successfully", blog: result.rows[0] });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteBlog = async (req, res) => {
  const { id } = req.params; // ✅ MATCHES ROUTE

  const client = await pool.connect();
  try {
    await client.query("SET search_path TO dotfit");

    const result = await client.query(
      "DELETE FROM dotfit.blogs WHERE blog_id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Delete failed" });
  } finally {
    client.release();
  }
};




const getAllTestimonials = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        description,
        media_url,
        media_type,
        created_at
      FROM dotfit.testimonials
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Get Testimonials Error:", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};

const getTestimonialById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM dotfit.testimonials WHERE id = $1`,
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Get Testimonial Error:", error);
    res.status(500).json({ error: "Failed to fetch testimonial" });
  }
};

const createTestimonial = async (req, res) => {
  try {
    const { name, description, media_type } = req.body;

    let mediaUrl = null;

    if (req.file) {
      const upload = await S3Service.uploadFile(req.file, "testimonials");
      mediaUrl = upload.publicUrl;
    }

    const result = await pool.query(
      `
      INSERT INTO dotfit.testimonials
        (name, description, media_url, media_type)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [name, description, mediaUrl, media_type]
    );

    res.json({
      message: "Testimonial created successfully",
      testimonial: result.rows[0],
    });
  } catch (error) {
    console.error("Create Testimonial Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateTestimonial = async (req, res) => {
  const { testimonialId } = req.params;

  try {
    const { name, description, media_type } = req.body;

    const existing = await pool.query(
      `SELECT media_url FROM dotfit.testimonials WHERE id = $1`,
      [testimonialId]
    );

    if (!existing.rows.length) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    let mediaUrl = existing.rows[0].media_url;

    if (req.file) {
      const upload = await S3Service.uploadFile(req.file, testimonialId);

      if (mediaUrl) {
        const oldKey = new URL(mediaUrl).pathname.substring(1);
        await S3Service.deleteFile(oldKey);
      }

      mediaUrl = upload.publicUrl;
    }

    const result = await pool.query(
      `
      UPDATE dotfit.testimonials
      SET
        name = $1,
        description = $2,
        media_url = $3,
        media_type = $4
      WHERE id = $5
      RETURNING *
      `,
      [name, description, mediaUrl, media_type, testimonialId]
    );

    res.json({
      message: "Testimonial updated successfully",
      testimonial: result.rows[0],
    });
  } catch (error) {
    console.error("Update Testimonial Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteTestimonial = async (req, res) => {
  const { testimonialId } = req.params;

  try {
    const result = await pool.query(
      `SELECT media_url FROM dotfit.testimonials WHERE id = $1`,
      [testimonialId]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    const mediaUrl = result.rows[0].media_url;

    if (mediaUrl) {
      const key = new URL(mediaUrl).pathname.slice(1);
      await S3Service.deleteFile(key);
    }

    await pool.query(
      `DELETE FROM dotfit.testimonials WHERE id = $1`,
      [testimonialId]
    );

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Delete Testimonial Error:", error);
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
};

/* ---------------- CREATE ASSESSMENT ---------------- */
const createAssessment = async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('SET search_path TO dotfit');

    // Check email
    const emailCheck = await client.query(
      'SELECT id FROM dotfit.users WHERE email = $1',
      [req.body.email]
    );

    if (emailCheck.rows.length > 0) {
      return res.status(400).json({
        error: 'Email already exists. Please use another email address.',
      });
    }

    await client.query('BEGIN');

    // Insert user
    const userResult = await client.query(
      `INSERT INTO dotfit.users 
       (full_name, age, gender, height, weight, occupation, email, contact_number)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING id`,
      [
        req.body.fullName,
        req.body.age,
        req.body.gender,
        req.body.height,
        req.body.weight,
        req.body.occupation,
        req.body.email,
        req.body.contactNumber,
      ]
    );

    const userId = userResult.rows[0].id;

    // Assessment
    await client.query(
      `INSERT INTO dotfit.assessments 
       (user_id, bmi, bmi_category, bmr, fat_percentage, fat_category)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [
        userId,
        req.body.bmi,
        req.body.bmiCategory,
        req.body.bmr,
        req.body.fatPercentage,
        req.body.fatCategory,
      ]
    );

    // Medical history
    const mh = req.body.medicalHistory;
    await client.query(
      `INSERT INTO dotfit.medical_history
       (user_id, has_medical_conditions, medical_conditions, has_medications, medications,
        has_injuries, injuries, has_joint_pain, joint_pain, has_doctor_advice, doctor_advice)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        userId,
        mh.hasMedicalConditions,
        mh.medicalConditions || null,
        mh.hasMedications,
        mh.medications || null,
        mh.hasInjuries,
        mh.injuries || null,
        mh.hasJointPain,
        mh.jointPain || null,
        mh.hasDoctorAdvice,
        mh.doctorAdvice || null,
      ]
    );

    // Lifestyle
    const lifestyle = req.body.lifestyle;
    await client.query(
      `INSERT INTO dotfit.lifestyle
       (user_id, sleep_hours, smoking, alcohol, alcohol_frequency, activity_level)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [
        userId,
        lifestyle.sleepHours,
        lifestyle.smoking,
        lifestyle.alcohol,
        lifestyle.alcohol_frequency || null,
        lifestyle.activityLevel,
      ]
    );

    // Current activity
    await client.query(
      `INSERT INTO dotfit.current_activity (user_id, currently_exercising)
       VALUES ($1,$2)`,
      [userId, req.body.currentActivity.currentlyExercising]
    );

    // Fitness goals
    for (const goal of req.body.fitnessGoals.goals) {
      await client.query(
        `INSERT INTO dotfit.fitness_goals (user_id, goal, timeline)
         VALUES ($1,$2,$3)`,
        [userId, goal, req.body.fitnessGoals.timeline]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Assessment submitted successfully', userId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to submit assessment' });
  } finally {
    client.release();
  }
};

/* ---------------- UPDATE ASSESSMENT ---------------- */
const updateAssessment = async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('SET search_path TO dotfit');
    await client.query('BEGIN');

    const userId = req.params.userId;
    const { fullName, age, gender, height, weight, occupation, email, contactNumber } = req.body;

    await client.query(
      `UPDATE dotfit.users
       SET full_name=$1, age=$2, gender=$3, height=$4, weight=$5,
           occupation=$6, email=$7, contact_number=$8, updated_at=CURRENT_TIMESTAMP
       WHERE id=$9`,
      [fullName, age, gender, height, weight, occupation, email, contactNumber, userId]
    );

    await client.query('COMMIT');
    res.json({ message: 'Assessment updated successfully', userId });
  } catch (err) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: 'Failed to update assessment' });
  } finally {
    client.release();
  }
};

/* ---------------- DELETE ASSESSMENT ---------------- */
const deleteAssessment = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await pool.query(
      'DELETE FROM dotfit.users WHERE id = $1',
      [userId]
    );

    if (!result.rowCount) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Assessment deleted successfully', userId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete assessment' });
  }
};

/* ---------------- GET USER ASSESSMENT ---------------- */
const getAssessmentByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await pool.query(
      'SELECT * FROM dotfit.users WHERE id = $1',
      [userId]
    );
    if (!user.rows.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    const [assessment, medical, lifestyle, activity, goals] = await Promise.all([
      pool.query('SELECT * FROM dotfit.assessments WHERE user_id=$1', [userId]),
      pool.query('SELECT * FROM dotfit.medical_history WHERE user_id=$1', [userId]),
      pool.query('SELECT * FROM dotfit.lifestyle WHERE user_id=$1', [userId]),
      pool.query('SELECT * FROM dotfit.current_activity WHERE user_id=$1', [userId]),
      pool.query('SELECT goal, timeline FROM dotfit.fitness_goals WHERE user_id=$1', [userId]),
    ]);

    res.json({
      user: user.rows[0],
      assessment: assessment.rows[0],
      medicalHistory: medical.rows[0],
      lifestyle: lifestyle.rows[0],
      currentActivity: activity.rows[0],
      fitnessGoals: goals.rows,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessment' });
  }
};

/* ---------------- GET ALL USERS (ADMIN) ---------------- */
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT u.id, u.full_name, u.email, u.contact_number, u.age, u.gender,
              a.bmi, a.bmi_category, a.bmr, a.fat_percentage, a.fat_category,
              u.created_at
       FROM dotfit.users u
       LEFT JOIN dotfit.assessments a ON u.id = a.user_id
       ORDER BY u.created_at DESC`
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

/* ---------------- GET COMPLETE USER ---------------- */
const getCompleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      `SELECT u.*, a.*, mh.*, l.*, ca.*
       FROM dotfit.users u
       LEFT JOIN dotfit.assessments a ON u.id=a.user_id
       LEFT JOIN dotfit.medical_history mh ON u.id=mh.user_id
       LEFT JOIN dotfit.lifestyle l ON u.id=l.user_id
       LEFT JOIN dotfit.current_activity ca ON u.id=ca.user_id
       WHERE u.id=$1`,
      [userId]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};

/* ---------------- Conact us  ---------------- */
const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const query = `
      INSERT INTO dotfit.contact (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
    `;

    await pool.query(query, [name, email, phone, message]);

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
/* ---------------- GET ALL CONTACTS ---------------- */
 const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
         id, name, email, phone, message, created_at
       FROM dotfit.contact
       ORDER BY created_at DESC`
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get Contacts Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------------- DELETE CONTACT ---------------- */
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `DELETE FROM dotfit.contact WHERE id = $1`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Delete Contact Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  addUser, getUsers,getUserById,updateUser,deleteUser,
  createBlog,getAllBlogs,getBlogById,updateBlog,deleteBlog,
  getAllTestimonials, getTestimonialById,createTestimonial,updateTestimonial,deleteTestimonial,
  createAssessment,updateAssessment,deleteAssessment,getAssessmentByUserId,getAllUsers,getCompleteUser ,
  createContact,getAllContacts,deleteContact,
};

