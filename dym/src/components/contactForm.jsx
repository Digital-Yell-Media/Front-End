import React, { Component } from 'react';

class Form extends Component {
    constructor(props); {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: '',
    };

    this.updateField = this.updateField.bind(this);
    }
}

updateField(field, value) {

}

render () {
    return (
        <div>
            <Field 
                onChange={(event) => Form.updateField('name', event.target.value)} 
                value={this.state.name} />
            <Field 
                onChange={(event) => Form.updateField('email', event.target.value)}
                value={this.state.email} />
            <Field 
                onChange={(event) =>Form.updateField('message', event.target.value)}
                textarea
                value={this.state.message} />
            <Button formValues={this.state} email="digitalyellmedia@gmail.com" />

        </div>
    )
}