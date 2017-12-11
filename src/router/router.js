import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../components/main/mainPage';
import PostPage from '../components/pages/postsPage';
import TodosPage from '../components/pages/todosPage';
const Navigation = () => (
  <div id="main">
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/posts' component={PostPage}/>
      <Route path='/todos' component={TodosPage}/>
    </Switch>
  </div>
);

export default Navigation;