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

        content += '<div id="login">';
        content += '<div class="ui placeholder segment">';
        content += '<form class="ui form" action="http://localhost:8080/user/login" method="POST">';
        content += '<div class="field">';
        content += '<label>Identifiant</label>';
        content += '<div class="ui left icon input">';
        content += '<input type="email" name="email">';
        content += '<i class="user icon"></i>';
        content += '</div>';
        content += ' </div>';
        content += '<div class="field">';
        content += '<label>Mot de passe</label>';
        content += '<div class="ui left icon input">';
        content += '<input type="password" name="password">';
        content += ' <i class="lock icon"></i>';
        content += ' </div>';
        content += '  </div>';
        content += ' <button class="ui blue submit button" type="submit">Se connecter</button>';
        content += ' </form>';
        content += '</div>';
        content += '</div>';

        this.setState({
            content: content
        });
    }

    render() {
        const {
            content
        } = this.state;

        return (ReactHtmlParser(content));

    }
}