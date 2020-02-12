/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import API from '../utils/API'
import ReactHtmlParser from 'react-html-parser';
import { Link, Switch, Route } from "react-router-dom";
import { Edit } from './Edit';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  };

  componentDidMount() {
    this.renderPosts();
  }

  renderPosts = async () => {
    try {
      const { match: { params } } = this.props;
      let res = await API.getArticle(params.id);

      // this will re render the view with new data
      this.setState({
        article: res.data
      });

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const article = this.state.article;

    return <div id="article" class="ui link cards"> 
    <div className="card">
    <div className="image">
    <img src={article.image} />
    </div>
    <div className="content">
    <div className="header">{article.name}</div>
    <div className="description">{article.description}</div>
    </div>
   <a href={'/blog/' + article._id + '/edit'}>Modifier</a>
    </div>
    </div>;

  }
}