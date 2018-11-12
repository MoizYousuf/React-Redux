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
               <h1>Your Data</h1>
                {
                    this.props.save ?
                    <div>
                    <h2>FirstName: -- <span style={{color: "blue", fontFamily: "monospace",fontSize: "38px"}}>{this.props.save.firstName}</span></h2>
                    <h2>LastName: -- <span style={{color: "blue", fontFamily: "monospace",fontSize: "38px"}}>{this.props.save.lastName}</span></h2>
                    <h2>Email: -- <span style={{color: "blue", fontFamily: "monospace",fontSize: "38px"}}>{this.props.save.email}</span></h2>
                    <h2>Password: -- <span style={{color: "blue", fontFamily: "monospace",fontSize: "38px"}}>{this.props.save.password}</span></h2>
             
               </div> : ""
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);