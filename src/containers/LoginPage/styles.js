const styles = theme => ({
    loginPageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh",
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#3BB5FF",
    },
    inputContainer: {
        marginTop: 30,
    },
    input: {
        width: '100%',
        height: 25,
        borderRadius: 5,
        outline:'none'
    },
    textNotification: {
        fontSize: 15,
        fontWeight: 400,
        color: 'red',
    },
    buttonContainer: {
        marginTop: 30,
    },
    button: {
        width: 100,
        height: 30,
    },
})
export default styles;