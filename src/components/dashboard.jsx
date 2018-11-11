import React, { Component } from 'react';
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {save: state}
}

class Dashboard extends Component {
    render() {
        console.log(this.props.save)
        return (
            <div>
                <h1>This is dashboard</h1>
                {
                    this.props.save ?
                <h1>
                    <h2>FirstName</h2> = <i>{this.props.save.firstName}</i><br/>
                    <h2>LastName</h2> = <i>{this.props.save.lastName}</i><br/>
                    <h2>Email </h2>= <i>{this.props.save.email}</i><br/>
                    <h2>password </h2>= <i>secret..!</i><br/>
                </h1>: ""
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);