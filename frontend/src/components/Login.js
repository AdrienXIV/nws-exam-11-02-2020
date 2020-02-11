import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    };

    componentDidMount() {
        this.form();
    };

    form() {
        let content = "";

        content += '<form method="POST" action="http:localhost:8080/user/login">';
        content += '<div class="form-group">';
        content += '<label for="email">Courriel</label>';
        content += '<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="email@gmail.com" required>';
        content += '</div>';
        content += '<div class="form-group">';
        content += '<label for="password">Mot de passe</label>';
        content += '<input type="password" class="form-control" id="password" required>';
        content += ' </div>';
        content += ' <button type="submit" class="btn btn-primary">Connexion</button>';
        content += '</form>';

        this.setState({
            content: content
        });
    }

    render() {
        const { content } = this.state;

        return (
            ReactHtmlParser(content)
            );
               
    }
}