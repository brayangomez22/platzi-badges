import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                avatar={"https://www.gravatar.com/avatar?d=identicon"}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew