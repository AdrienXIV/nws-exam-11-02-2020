/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import API from '../utils/API'
import { Redirect } from 'react-router-dom';

export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:"",
        name:"",
        image:"",
        description:""
    ,
    isSubmitting:false
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.renderPosts();
  }

  // changement valeur input
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
      
    });
  }

  // envoie du formulaire
  handleSubmit(event) {
    let data = {
      name:this.state.name,
      image:this.state.image,
      description:this.state.description
    };

      event.preventDefault();
      this.setState({ redirect: true });

      fetch(`http://localhost:8080/blog/add`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res =>{
    this.setState({ isSubmitting: false });
    return res.json();
})
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
  }

  renderPosts = async () => {
    try {
      const { match: { params } } = this.props;
      let res = await API.getArticle(params.id);
console.log(res.data)
      // this will re render the view with new data
      this.setState({
          id:res.data._id,
            name: res.data.name,
            image: res.data.image,
            description: res.data.description
        
      });

    } catch (err) {
      console.log(err);
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/blog' />
    }
  }

  render() {
    
return <form className="ui form" onSubmit={this.handleSubmit}>
<div className="field">
    <label htmlFor="name">Nom</label>
    <input type="text" name="name" id="name" value={this.state.name}
    onChange={this.handleChange}/>
  </div>
  <div className="field">
    <label htmlFor="image">Image</label>
    <input type="text" name="image" id="image" value={this.state.image} onChange={this.handleChange}/>
    <img src={this.state.image} />
  </div>
  <div className="field">
    <label htmlFor="description">Description</label>
      <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
    </div>
    {this.renderRedirect()}
  <button className="ui button" type="submit">Enregistrer</button>
</form>
  }
}