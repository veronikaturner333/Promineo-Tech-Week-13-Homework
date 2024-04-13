function LoginForm() {

    //return labeled forms for username and password
    //As well as a submit button
    return(
        <div className="LoginForm">
            <h3>Log In</h3>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" placeholder="Username"/>
                </label><br></br>
                <label>
                    Password:
                    <input type="text" name="password" placeholder="Password"/>
                </label><br></br>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

//makes component available to be imported elsewhere
export default LoginForm;