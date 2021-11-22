import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import userService from './services/users'

import { Grid, Box, CssBaseline, Typography } from '@mui/material'
import useStyles from './components/styles'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState([])

  const [error, setErrorMessage] = useState(null)
  const [success, setSuccessMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    blogService.getAll().then(response => setBlogs(response))
    userService.getAll().then(response => setUsers(response))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({username, password})

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setSuccessMessage('logged in succesfully')
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage(`Wrong credentials`)
      setPassword('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }

  const handleSignup = (signupObject, toggleClick) => {
    userService
      .create(signupObject)
      .then(response => {
        setSuccessMessage('User created. Please login to continue')
        toggleClick()
        setTimeout(() => {
          setSuccessMessage(null)
        }, 2000)
        setUsername('')
        setPassword('')
      })
      .catch(error => {
        setErrorMessage(`Error: ${error.response.data.error}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 4000);
      })
  }

  return (
    <>
      <CssBaseline />
          <Grid container component="main" className={classes.mainGrid}>
            <Grid item xs={12} sm={12} md={5} lg={5} className={classes.aboutGrid}>
              <Box container sx={{display:'flex', flexDirection:'column'}}>
                <Notification error={error} success={success} />
                <Box item>
                <Typography sx={{fontSize:100, fontFamily:'-moz-initial'}}>Blogrr.</Typography>
                <Typography sx={{fontSize:15, fontFamily:'monospace', textAlign:'end', mb:6, pr:4}}>a Single-page Blog App.</Typography>
                </Box>
                <Typography sx={{fontSize:15, fontFamily:'initial', mb:6}}>Create an account and see blogs from other users.</Typography>
                <Typography sx={{fontSize:15, fontFamily:'initial', mb:12}}><strong>Made with:</strong> MongoDB, Express, ReactJS, NodeJS </Typography>
                <Typography sx={{fontSize:15, fontFamily:'initial', textAlign:'center'}}>Copyright © <a href='https://blogrr-app.herokuapp.com/'>Blogrr</a> 2021</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} square className={classes.contentGrid}>
              {
                user === null 
                ? <Home handleLogin={handleLogin} handleSignup={handleSignup} setPassword={setPassword} setUsername={setUsername} username={username} password={password} error={error} success={success}/>
                : <Blogs blogs={blogs} users={users} handleLogout={handleLogout} user={user} setBlogs={setBlogs} error={error} setErrorMessage={setErrorMessage} success={success} setSuccessMessage={setSuccessMessage}/>
              }
            </Grid>
          </Grid>
    </>
  )
}

export default App