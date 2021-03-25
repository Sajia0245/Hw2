import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favLinks: [
                {name: 'Github', URL: 'https://github.com/camunity/intro-to-web-developmen'},
                {name: 'Email', URL: 'www.cloud.com'}
            ]
        };
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {


        return (

            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData={this.state.favLinks}/>
                <br/>
                <h3>Add New</h3>
                <Form onFormSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;