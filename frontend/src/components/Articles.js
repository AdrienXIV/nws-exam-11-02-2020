/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import API from '../utils/API'

export class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: []
    };
};

  componentDidMount() {
    this.renderPosts();
  }
  
  renderPosts = async() => {
    try {
      let res = await API.getArticles();
      console.log(res.data)
      // this will re render the view with new data
      this.setState({
        articles: res.data
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  render() {
    return (
      <div>
        <center><h1>Articles</h1></center>
        {this.state.articles.map((article) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{article.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{article.description}</h6>
            </div>
          </div>
        ))}
      </div>
    )
  }

}