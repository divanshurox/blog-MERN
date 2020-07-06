import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import classes from '../css/AddBlog.module.css';
import { connect } from 'react-redux';
import { postBlog } from '../store/actions/blogAction';

export class AddBlog extends Component {
    state = {
        title: '',
        content: ''
    }
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        const { title, content } = this.state;
        const newBlog = {
            title,
            content
        }
        this.props.postBlog(newBlog);
        this.props.history.replace('/');
        e.preventDefault();
    }
    render() {
        return (
            <div className={classes.Body}>
                <div className={classes.Form}>
                    <Form style={{ padding: '10px' }} onSubmit={this.submitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={this.onChangeHandler} type="text" name="title" placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Content</Form.Label>
                            <Form.Control onChange={this.onChangeHandler} as="textarea" type="text" name="content" placeholder="Enter Content" />
                            <Form.Text className="text-muted">
                                Happy Writting!
                        </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postBlog: (blog) => dispatch(postBlog(blog))
    }
}

export default connect(null, mapDispatchToProps)(AddBlog)
