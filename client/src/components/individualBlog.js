import React, { Component } from 'react'
import Axios from 'axios';
import { Container } from 'react-bootstrap';
import classes from '../css/OneBlog.module.css';
import pizza from '../assets/pizza.png';
import code from '../assets/code.png';
import donut from '../assets/donut.png';
import camera from '../assets/photo.png';
import shake from '../assets/shake.png';

export class individualBlog extends Component {
    state = {
        blog: {}
    }
    componentDidMount() {
        Axios.get(`/api/blogs/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ blog: res.data });
            });
    }
    render() {
        return (
            <div className={classes.Body}>
                <div className={classes.Title}>
                    <img src={pizza} alt=" " className={classes.pizza} />
                    <img src={code} alt=" " className={classes.code} />
                    <img src={camera} alt=" " className={classes.camera} />
                    <h2 className={classes.TitleText}>{this.state.blog.title}</h2>
                    <img src={donut} alt=" " className={classes.donut} />
                    <img src={shake} alt=" " className={classes.shake} />
                </div>
                <div className={classes.Content}>
                    <p className={classes.Matter}>{this.state.blog.content}</p>
                </div>
            </div>
        )
    }
}


export default individualBlog
