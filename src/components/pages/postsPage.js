import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

let url = 'http://jsonplaceholder.typicode.com';
let urlPost = url + '/posts/';
let postsNumber;
let apiContent = [];
let timesTitleClicked = 3;
let sortSymbolTitle = '';


class PostsAPI extends Component {
    

    constructor() {
        super();

        this.state = {
            posts: [],
            postsObject: [],
            activePage: 1,
            itemsPerPage: 10
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }


    componentDidMount() {

        function handleErrors(results) {
            if (!results.ok) {
                throw Error(results.statusText);
            }
            return results;
        }        

        fetch(urlPost)
        .then(handleErrors)
        .then(results => {
            return results.json();
        }).then(data => {  
            apiContent = data;
            this.setState({postsObject: data});

            let posts = data.map((val) => {   
                return (
                    <tr key={val.id}>
                        <td>{val.title}</td>
                        <td>{val.body}</td>
                    </tr>
                )
            });
            this.setState({posts: posts});
        }).catch(error => alert(error) );
    }

    

    
    // change state of current page
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }

    //handle select value for filter

    handleSelect(event) {
        let author = event.target.value;
        if (author == 404) {
            this.setState({postsObject: apiContent});
            let posts = apiContent.map((val) => {   
                return (
                    <tr key={val.id}>
                        <td>{val.title}</td>
                        <td>{val.body}</td>
                    </tr>
                )
            });
            this.setState({posts: posts});
        } else {
            let authorObject = [];
            let posts = apiContent.map((val) => {  
                if (val.userId == Number(author)) {
                        authorObject.push(val);
                    return (
                        <tr key={val.id}>
                            <td>{val.title}</td>
                            <td>{val.body}</td>
                        </tr>
                    )
                } else  {
                    
                }
            });
            this.setState({postsObject: authorObject});
            posts = posts.filter(function( element ) {
                return element !== undefined;
             });
            this.setState({posts: posts});
        }
        
    }

    // sort logic

    dataSortTitle() {

       let localApiContent = this.state.postsObject.slice(0);
       if (timesTitleClicked % 3 === 0) {
           timesTitleClicked++;
           sortSymbolTitle = ' A-Z';
           localApiContent.sort(function (a, b) {
               if (a.title > b.title) {
               return 1;
               }
               if (a.title < b.title) {
               return -1;
               }
               return 0;
           });
           let posts = localApiContent.map((val) => {    
               return (
                   <tr key={val.id}>
                       <td>{val.title}</td>
                       <td>{val.body}</td>
                   </tr>
               )
           });
           this.setState({posts: posts});
           console.log(localApiContent);
       } else if (timesTitleClicked % 3 === 1) {
           timesTitleClicked++
           sortSymbolTitle = ' Z-A';
           localApiContent.sort(function (a, b) {
               if (a.title > b.title) {
               return -1;
               }
               if (a.title < b.title) {
               return 1;
               }
               return 0;
           });
           let posts = localApiContent.map((val) => {    
               return (
                   <tr key={val.id}>
                       <td>{val.title}</td>
                       <td>{val.body}</td>
                   </tr>
               )
           });
           console.log(localApiContent);
           this.setState({posts: posts});
       } else if (timesTitleClicked % 3 === 2) {
           timesTitleClicked++;
           sortSymbolTitle = '';
           let posts = this.state.postsObject.map((val) => {    
               return (
                   <tr key={val.id}>
                       <td>{val.title}</td>
                       <td>{val.body}</td>
                   </tr>
               )
           });
           this.setState({posts: posts});           
           console.log(localApiContent);
           
       }
   }


    render(){

        
        //save info in localStorage
        postsNumber = this.state.posts.length;        
        localStorage.setItem('postLength', postsNumber);

        //setup pagination
        let indexOfLastPost = this.state.activePage * this.state.itemsPerPage;
        let indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
        let currentPost = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
        let renderPosts = currentPost.map((post, index) => {
          return post;
        });


        return (
            <div className="posts-data">
                <div className="table-tuning">
                    <div className="items-per-page">
                        <h4>Enter please, number of posts per page, between 1 and {this.state.posts.length}:</h4>
                        <input type="number" className="123" onChange={event => this.onInputChange( event.target.value )}/>
                    </div>
                    <h4 className="sorting-info">Sorting functionality was written manually. In reasons of time saving, I enable sorting only for the Title column.</h4>
                    <span>Here you can filter between authors post.</span>
                    <select value={this.state.author} onChange={this.handleSelect}>
                    <option value="404">-- choose author --</option>
                    <option value="1">author1</option>
                    <option value="2">author2</option>
                    <option value="3">author3</option>
                    <option value="4">author4</option>
                    <option value="5">author5</option>
                    <option value="6">author6</option>
                    <option value="7">author7</option>
                    <option value="8">author8</option>
                    <option value="9">author9</option>
                    <option value="10">author10</option>
                </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={(e) => this.dataSortTitle(e)}>Title{sortSymbolTitle}</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts}
                    </tbody>
                </table>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsPerPage}
                    totalItemsCount={this.state.posts.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    />
            </div> 
        )
    }


    //change items per page and avoid errors
    onInputChange(itemsPerPage) {
        if (itemsPerPage >= 1 && itemsPerPage <= this.state.posts.length) {
        this.setState({itemsPerPage});
      } else {
          null
      }
    }
    

}

export default PostsAPI;




    