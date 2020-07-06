import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import { Route, Switch } from 'react-router-dom';
import IndiBlog from './components/individualBlog';
import AddBlog from './components/AddBlog';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';
import { loadUser } from './store/actions/authActions';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route exact path="/add" component={AddBlog} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:id" component={IndiBlog} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  }
}

export default connect(null, mapDispatchToProps)(App);

