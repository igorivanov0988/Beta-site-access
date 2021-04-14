import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from "redux";
import {connect} from "react-redux";
import {userLogOut} from "../../store/actions/userActions";

import styles from './styles';

class HomePage extends React.Component {

    /**
     * Checking to allow access to the home page
     * If the user is already registered, it will be left on this page
     * If the user is not logged in, they will be redirected to the login page
     */
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/home')
        } else {
            this.props.history.push('/login')
        }
    };

    /**
     * Return function to login page
     * an action call that the user requests log out
     */
    logOut = () => {
        this.props.userLogOut()
        this.props.history.push('/login')
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.loginPageContainer}>
                <div className={classes.contentContainer}>
                    <div className={classes.textContainer}>
                        <h2 className={classes.text}>Congratulations, you have access to the site,<br/>
                            but it is still under constructions! :)</h2>
                        <h2 className={classes.text}>This Home Page</h2>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button} onClick={this.logOut}>Log out</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    userLogOut,
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles),
)(HomePage)