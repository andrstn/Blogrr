import React from "react"

import { Box, Typography, Button, Grid, TextField, Link} from "@mui/material"
import useStyles from "./styles"

const LoginForm = ({handleLogin, setUsername, setPassword, username, password, toggleClick}) => {

    const classes = useStyles()

    return (
      <>
      <Box component="form" noValidate onSubmit={handleLogin} className={classes.loginBox}>
        <Typography component="h2" variant="h5">Sign in</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username"
          name="email"
          autoComplete="email"
          value={username}
          onChange={({target}) => setUsername(target.value)}
          autoFocus
          color='success'
        />
         <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={({target}) => setPassword(target.value)}
            color='secondary'
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2,  }}
            color='success'
          >
            Sign In
          </Button>
          <Grid container>
          <Grid item sx={{display:'flex', flexDirection:"row"}}>
            <Typography sx={{mr:1}}>Dont have an account yet?</Typography>
            <Link onClick={toggleClick} color='rgb(0, 0, 0)'>Sign-up</Link>
          </Grid>
          </Grid>
      </Box>
     </>
    )
}

export default LoginForm