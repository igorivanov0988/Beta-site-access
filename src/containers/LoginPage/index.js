import React from 'react';
import { withStyles } from "@material-ui/core";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../store/actions/userActions';

import Loader from 'react-loader-spinner';

import styles from './styles';

class LoginPage extends React.Component {
    state={
        password:'',
        isShowHintText: false,
    };

    /**
     * Checking to allow access to the home page
     * If the user is already registered, he will be redirected
     * to the home page
     * If not registered, it will be left on this page
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
     * In case of successful user registration, redirect to the
     * home page if the validation condition is satisfied
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isAuth} = this.props;
        if (!prevProps.isAuth && isAuth) {
            this.props.history.push('/home')
        }
    };

    /**
     * Input field event handler function
     */
    onChangeInput = (term) => {
        this.setState({password: term.target.value, isShowHintText: false})
    };

    /**
     * Validation input field for true
     * If the field is not empty, it call the Auth function,
     * otherwise it will show the warning text
     */
    validationInput = () => {
        const {password} = this.state;
        if (password) {
            this.logIn()
        } else {
            this.setState({isShowHintText: true})
        }
    };

    /**
     * Auth function and
     * an action call that the user requests registration
     * Updates the state of the object password
     */
    logIn = () => {
        const {password} = this.state;
        this.props.userLogin({password: password})
        this.setState({password: ''})
    };

    render() {
        const {classes, isShowAlertText} = this.props;
        const {password, isShowHintText} = this.state;

        return (
            <div className={classes.loginPageContainer}>
                <div className={classes.contentContainer}>
                    <div>
                        <h2 className={classes.text}>
                            Sorry, this site is still under construction!
                        </h2>
                    </div>
                    <div>
                        <Loader type="Circles"
                                color="#3BB5FF"
                                height="30"
                                width="30"
                        />
                    </div>
                        <div className={classes.inputContainer}>
                            <input className={classes.input}
                                   title="Please enter the password to access the site"
                                   placeholder="Enter password"
                                   autoCapitalize={'none'}
                                   type="password"
                                   value={password}
                                   onChange={this.onChangeInput}/>
                        </div>
                    {isShowHintText? (
                        <div>
                            <p className={classes.textNotification}>
                                Please enter the password to access the site</p>
                        </div>
                    ) : null}
                    {isShowAlertText? (
                        <div>
                            <p className={classes.textNotification}>
                                Invalid Password</p>
                        </div>
                    ) : null}
                    <div className={classes.buttonContainer}>
                        <button className={classes.button} onClick={this.validationInput}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ logIn }) => ({
    isAuth: logIn.isAuth,
    token: logIn.token,
    isShowAlertText: logIn.isShowAlertText
});

const mapDispatchToProps = {
    userLogin,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(LoginPage)