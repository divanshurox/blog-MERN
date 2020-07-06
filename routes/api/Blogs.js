const express = require('express');
const router = express.Router();

const app = express();

const Blog = require('../../model/Blog');

// Route    '/api/blogs'
// @desc    Get All Blogs
// @access  Public
router.get('/', (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then(blogs => res.json(blogs))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        content: req.body.content
    })
    newBlog.save()
        .then(blog => res.json(blog));
})

// Route /api/blogs/:id
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => console.log(err));
})

router.delete('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => {
            blog.remove()
                .then(() => res.json({ success: true }))
        })
        .catch((err) => res.status(404).json({ success: false }));
})

module.exports = router;