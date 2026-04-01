const express = require('express');
const usercontroller = require('../controllers/usercontrollers')
const multer = require('multer');
const storage = multer.memoryStorage();
const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 5MB
});
// -----------------------add admin----------------------------------------
router.post("/users", usercontroller.addUser);
router.get("/users", usercontroller.getUsers);
router.get("/users/:id", usercontroller.getUserById);
router.put("/users/:id", usercontroller.updateUser);
router.delete("/users/:id", usercontroller.deleteUser);
// -----------------------Blog----------------------------------------
router.post("/blogs", upload.single("cover_image"),usercontroller. createBlog);
router.get("/blogs", usercontroller.getAllBlogs);
router.get("/blogs/:id", usercontroller.getBlogById);
router.put("/blogs/:blogId", upload.single("cover_image"),usercontroller. updateBlog);
router.delete("/blogs/:id", usercontroller.deleteBlog);
// -----------------------testimonials----------------------------------------
router.get("/testimonials", usercontroller.getAllTestimonials);
router.get("/testimonials/:id", usercontroller.getTestimonialById);
router.post("/testimonials", upload.single("media"), usercontroller.createTestimonial);
router.put("/testimonials/:testimonialId", upload.single("media"), usercontroller.updateTestimonial);
router.delete("/testimonials/:testimonialId", usercontroller.deleteTestimonial);
// -----------------------Assessments----------------------------------------
router.post('/assessments', usercontroller.createAssessment);
router.put('/assessments/:userId', usercontroller.updateAssessment);
router.delete('/assessments/:userId',usercontroller.deleteAssessment);
router.get('/assessments/:userId', usercontroller.getAssessmentByUserId);
router.get('/assessments/users', usercontroller.getAllUsers);
router.get('/users/:userId/complete', usercontroller.getCompleteUser);

// ------------------------Contact us ------------------------------------

router.post("/contact",usercontroller. createContact);
router.get("/contact", usercontroller.getAllContacts);
router.delete("/contact/:id", usercontroller.deleteContact);

module.exports = router 
