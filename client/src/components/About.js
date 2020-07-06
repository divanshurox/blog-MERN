import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import me from '../assets/new.JPG';
import { BsCodeSlash } from 'react-icons/bs'
import classes from '../css/About.module.css';
import ParticlesBg from 'particles-bg';
import { Card } from 'react-bootstrap';

const about = () => {
    return (
        <div className={classes.About}>
            <h2><BsCodeSlash /> with Love ❤</h2>
            <Card style={{ width: '18rem' }} className={classes.Card}>
                <Card.Img style={{ height: '350px' }} variant="top" src={me} />
                <Card.Body>
                    <Card.Title>Divanshu Agarwal</Card.Title>
                    <hr />
                    <Card.Text>
                        Code to connect!
                </Card.Text>
                    <hr />
                    <a href="https://github.com/divanshurox?tab=repositories"><FaGithub style={{ color: 'grey', margin: 'auto 5px' }} /></a>
                    <a href="https://www.instagram.com/divanshuroxs/"><FaInstagram style={{ color: 'grey', margin: 'auto 5px' }} /></a>
                    <a href="https://www.linkedin.com/in/divanshu-agarwal-120bab1a0/"><FaLinkedin style={{ color: 'grey', margin: 'auto 5px' }} /></a>
                    <a href="https://www.facebook.com/divanshu.agarwal"><FaFacebook style={{ color: 'grey', margin: 'auto 5px' }} /></a>
                </Card.Body>
            </Card>
            <ParticlesBg type="circle" bg={true} num={200} />
        </div>
    );
}

export default about;