import React, { Component } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { register } from '../store/actions/authActions';

export class SignIn extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        msg: null
    }
    componentDidUpdate(prevProps) {
        const { error, isAuth } = this.props;
        if (error !== prevProps.error) {
            console.log(error.msg.msg, "   ", prevProps.error.msg.msg);
            this.setState({ msg: error.msg.msg });
        }
        if (isAuth) {
            this.props.history.replace('/');
        }
    }
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        const { name, email, username, password } = this.state;
        const user = {
            name,
            email,
            username,
            password
        }
        this.props.signUp(user);
        e.preventDefault();
    }
    render() {
        return (
            <Container style={{ marginTop: '100px', border: '1px solid #ccc', padding: '20px', width: '60%' }}>
                {this.state.msg && <Alert variant='danger'>{this.state.msg}</Alert>}
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="name" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="email" type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="username" type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onChangeHandler} name="password" type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                            We'll never share your info with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        GO!
                    </Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blog.blogs,
        isAuth: state.auth.isAuth,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (user) => dispatch(register(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
