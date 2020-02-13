import React from 'react';
import { Redirect } from 'react-router-dom';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            email:"",
            password:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        
    };

    
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
      
    });
  }

  handleSubmit(event) {

      event.preventDefault();
let data = {
    email:this.state.email,
    password:this.state.password
};
      fetch(`http://localhost:8080/user/new`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res =>{
    console.log(res)
    if (res.status === 200) {
        this.setState({
            redirect: true
          });
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Identifiant ou mot de passe incorrects.');
    });
}

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/blog' />
    }
  }

    render() {

        return <div id="login">
        <div className="ui placeholder segment"> 
        <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
        <label>Identifiant</label>
        <div className="ui left icon input">
        <input type="email" name="email" placeholder="email@gmail.com" value={this.state.email} onChange={this.handleChange}/>
        <i className="user icon"></i>
        </div>
        </div>
        <div className="field">
        <label>Mot de passe</label>
        <div className="ui left icon input">
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <i className="user icon"></i>
        </div>
        </div>
        {this.renderRedirect()}
        <button className="ui button" type="submit">S'inscrire'</button>
       </form>
        </div>
        </div>;

    }
}