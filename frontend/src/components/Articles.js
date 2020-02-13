/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import API from '../utils/API'
import ReactHtmlParser from 'react-html-parser';

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

  renderPosts = async () => {
    try {

      let res = await API.getArticles();
      this.setState({
        articles: res.data
      });

      this.tdContent();

    } catch (err) {
      console.log(err);
    }
  }

  tdContent() {
    const article = this.state.articles;
    let response_length = this.state.articles.length;
    let content = "";

    for (let i = 0; i < response_length; i++) {
      content += '<a title="Voir article" class="item" href="/blog/'+ article[i]._id +'">';
      content += '<div class="right floated content">';
      content += '</div>';
      content += '<img class="ui avatar image" src="'+ article[i].image+'">';
      content += '<div class="content">' + article[i].name;
      content += '</div>';
      content += '</a>';
    };
    this.setState({
      content: content
    });
  }

  render() {
    const { content } = this.state;

    return <div id="articles" className= "ui middle aligned divided list" > 
    
      {ReactHtmlParser(content)}
    
    </div>;

  }
}