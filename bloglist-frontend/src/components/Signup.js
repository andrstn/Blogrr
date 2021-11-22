import React, { useState } from "react"

import { Grid, TextField, Button, Typography, Link, Box } from "@mui/material"
import useStyles from "./styles"

const Signupform = ({handleSignup, setUsername, setPassword, username, password, toggleClick}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const classes = useStyles()

    const passSignup = (event) => {
        event.preventDefault()
        const signupObject = {
            username: username,
            name: `${firstName} ${lastName}`,
            password: password
        }
        handleSignup(signupObject, toggleClick)
    }

    return (
        <>
        <Box component="form" noValidate onSubmit={passSignup} className={classes.signupBox}>
            <Typography component="h2" variant="h5" sx={{textAlign:'center'}}>Sign Up</Typography>
            <Grid container sx={{justifyContent:'center'}}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value)}
                    autoFocus
                    color="success"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={({target}) => setLastName(target.value)}
                    autoFocus
                    color="secondary"
                    />
                </Grid>
            </Grid>    
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={({target}) => setUsername(target.value)}
                autoFocus
                color="success"
                />
            <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="new-password"
                type="password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
                autoFocus
                color="secondary"
            />
            <Button
            type="submit"
            fullWidth
            variant="outlined"
            color='success'
            sx={{ mt: 3, mb: 2, ml:4, mr:4}}
            >
            Sign Up
            </Button>
            <Grid container sx={{justifyContent:'center'}}>
            <Grid item sx={{display:'flex', flexDirection:"row"}}>
                <Typography sx={{mr:1}}>Already have an account?</Typography>
                <Link onClick={toggleClick} color='rgb(0, 0, 0)'>Log-in</Link>
            </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Signupform