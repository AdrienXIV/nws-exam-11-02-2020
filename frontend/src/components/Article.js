/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import API from '../utils/API'
import { Redirect } from 'react-router-dom';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
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

      // récupération des données
      this.setState({
        article: res.data
      });

    } catch (err) {
      console.log(err);
    }
  }

  Delete = () => {
    fetch(`http://localhost:8080/blog/` + this.state.article._id, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res =>{
      this.setState({ redirect: true });
      return res.json();
  })
      .then(data => console.log(data))
      .catch(err => console.error("Error:", err));
    }
  

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/blog' />
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
    <div Style="padding:15px; display:flex;">
   <a href={'/blog/' + article._id + '/edit'} Style="width:fit-content;">Modifier</a>
   <div id="delete" onClick={this.Delete}><span>Supprimer</span></div>
   </div>
   {this.renderRedirect()}
    </div>
    </div>;

  }
}