import React, { Component } from 'react';

class MainPage extends Component {
    
      constructor(props) {
        super(props);

    }

    render() {
    
        let postLength = localStorage.getItem('postLength'); 
        
        return (
    
      <div className="main-page">
          <h1>Hello, my name is Stanislav Yanchenko. Time that I spend for this app is about 10 hours.</h1>
          <h3>When You visit page "Posts", the number of posts that are into table would be rendered here: {postLength}</h3>
      </div>
    );
  }
}

export default MainPage;