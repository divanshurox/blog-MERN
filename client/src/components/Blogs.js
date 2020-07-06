import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBlog, deleteBlog } from '../store/actions/blogAction';
import { Card, Container } from 'react-bootstrap';
import { FaBookOpen, FaTrash } from 'react-icons/fa';
import classes from '../css/Blog.module.css';
import { Fade } from 'react-reveal';

export class Blogs extends Component {
    componentWillMount() {
        this.props.getBlogs();
        console.log(this.props);
    }
    render() {
        const blogs = this.props.blogs.map((blog) => {
            return (
                <Fade left>
                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>
                                {blog.content.substring(0, 20) + '...'}
                            </Card.Text>
                            <Card.Link href="#" onClick={() => this.props.history.push(`/${blog._id}`)} ><FaBookOpen /> Read More</Card.Link>
                            <Card.Link href="#" style={{ color: 'red' }} onClick={() => this.props.delBlog(blog._id)}><FaTrash /> Delete Blog</Card.Link>
                        </Card.Body>
                    </Card>
                </Fade>
            );
        })
        return (
            <div className={classes.Blogs}>
                {blogs}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blog.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBlogs: () => dispatch(getBlog()),
        delBlog: (id) => dispatch(deleteBlog(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
