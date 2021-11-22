import React, { useState } from "react"
import LoginForm from "./Login"
import Signupform from "./Signup"

import { Box } from "@mui/material"
import useStyles from "./styles"

const Home = ({handleLogin, handleSignup, setUsername, setPassword, username, password, error, success}) => {

    const classes = useStyles()

    const [haveAccount, setHaveAccount] = useState(true)

    const toggleClick = () => {
        setHaveAccount(!haveAccount)
    }

    return (
        <>  
            <Box className={classes.authenticationBox}>
                {
                    haveAccount === true 
                    ?<LoginForm 
                    handleLogin={handleLogin}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    username={username}
                    password={password}
                    error={error}
                    success={success}
                    toggleClick={toggleClick}
                    />
                    :<Signupform 
                    handleSignup={handleSignup}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    username={username}
                    password={password}
                    error={error}
                    success={success}
                    toggleClick={toggleClick}
                    />
                }
            </Box>  
        </>
    )
}

export default Home