function Login(){
    // Process form elements
    const processForm=(call)=>{
        call.preventDefault();
        // Capture user inputs
        const user=call.target.element.username_txt.value;
        const pass=call.target.element.password_txt.value;
        //Handle User data
        console.log("Your username is " + user);
        console.log("Your password is " + pass);

        if (user==="ursula" && pass==="onyi"){
            alert("Login Successful");
        }
        else {
            alert("Invalid Login credentials");
        }
    }

    return(
        <center>
            <form onSubmit={processForm} >
                <h3>Welcome Guest</h3>
                <p>Kindly enter your email as username and school password to continue</p>
                <input type="text" placeholder="Username" name="username_txt" id="username_txt" />
                <br />
                <input type="password" placeholder="Password" name="password_txt" id="username_txt" />
                <br />
                <input type="submit" name="mysubmit_btn" />
            </form>
        </center>
    );

}

export default Login;
