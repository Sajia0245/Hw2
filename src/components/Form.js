import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', url: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();


        this.setState({name: ''});
        this.setState({url: ''});
    }

    render() {

        return (

            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    URL: <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )

    }
}

export default Form;
