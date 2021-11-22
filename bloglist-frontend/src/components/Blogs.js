import React from 'react'
import CreateBlog from './CreateBlog'
import Blog from './Blog'
import blogService from '../services/blogs'

import { Box, Paper, Typography, Button, List } from '@mui/material'


const Blogs = ({blogs, users, handleLogout, user, setBlogs, error, setErrorMessage, success, setSuccessMessage}) => {
  
  const handleLike = async (event) => {
    event.preventDefault()
    let id = event.target.value
    const blog = blogs.find(n => n.id === id)
    const newLikes = blog.likes.concat(user.id)
    const changedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: newLikes,
      user: blog.user
    }
    const returnedBlog = await blogService.update(id, changedBlog)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
  }

  const handleUnlike = async (event) => {
    event.preventDefault()
    let id = event.target.value
    const blog = blogs.find(n => n.id === id)
    const newLikes = blog.likes.filter(liker => liker !== user.id)
    const changedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: newLikes,
      user: blog.user
    }
    const returnedBlog = await blogService.update(id, changedBlog)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
  }

  const handleRemove = async (event) => {
    event.preventDefault()
    let id = event.target.value
    if (window.confirm(`remove blog?`)) {
      try {
        await blogService.remove(id)
        setBlogs(blogs.filter(n => n.id !== id))
        setSuccessMessage('Blog removed')
        setTimeout(() => {
          setSuccessMessage(null)
        }, 2000);
      } catch (error) {
        setErrorMessage(`Error: ${error.response.data.error}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000);
      }
    }
  }

  return (
    <>
      <Box container sx={{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'start',
        width:'100%',
        height:'90%',
        m:4}}>
        <Box item sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
          height: '5%',
          mr: 3,
          mb: 2
        }}>
          <Typography sx={{mr:4}}>Hello, {user.name}</Typography>
          <Button size='small' variant='outlined' onClick={handleLogout}>Log-out</Button>
        </Box>
        <Box item component={Paper} elevation={9} sx={{
          display:'flex',
          flexDirection:'column',
          height:'90%',
          overflow:'auto',
          mb:3
        }}>
          <List>
            {blogs.map(blog => {
              return (
                <Blog key={blog.id} blog={blog} user={user} handleLike={handleLike} handleUnlike={handleUnlike} handleRemove={handleRemove}/>
              )})}
          </List>
        </Box>
        <Box item sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <CreateBlog 
              blogs={blogs} 
              user={user}
              setBlogs={setBlogs} 
              setErrorMessage={setErrorMessage} 
              setSuccessMessage={setSuccessMessage} 
            />
        </Box>
      </Box>
    </>
  )
}

export default Blogs