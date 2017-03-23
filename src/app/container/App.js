import React from "react";
import {connect} from "react-redux";

import User from '../components/User';
import Main from '../components/Main';

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName('JAi')}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
};

const mapDispachToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    }
};

export default connect(mapStateToProps, mapDispachToProps)(App);