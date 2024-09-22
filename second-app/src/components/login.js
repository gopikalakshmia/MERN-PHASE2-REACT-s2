function Login(props) {
    if(props.isLoggedIn){
        return(<div>
            <h1>welcome ...{props.name}</h1>
        </div>)
    }
    else
    return(<div>
        <h1>Please sign up</h1>
    </div>)
}
Login.defaultProps={
    login:false
}
export default Login;