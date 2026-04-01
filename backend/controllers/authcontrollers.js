const pool = require("../config/db");
const jwt = require("jsonwebtoken");

//---------------------------------------------
// LOGIN CONTROLLER
//---------------------------------------------
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const result = await pool.query(
      "SELECT admin_id, name, email, password, role FROM dotfit.admins WHERE email=$1 AND status=true",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const admin = result.rows[0];

    // ⚠️ PLAIN PASSWORD CHECK (as requested)
    if (admin.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { admin_id: admin.admin_id, role: admin.role },
      "secretkey",
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        admin_id: admin.admin_id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
};


module.exports = { login };
