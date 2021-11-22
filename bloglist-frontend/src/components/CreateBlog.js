import { TextareaAutosize, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import React, { useState } from "react"
import blogService from '../services/blogs'

const CreateBlog = ({blogs, user, setBlogs, setErrorMessage, setSuccessMessage}) => {

    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const addBlog = (event) => {
        event.preventDefault()
        handleClose()
        const blogObject = {
            title: title,
            author: user.name
        }
        blogService
            .create(blogObject)
            .then(returnedBlog => {
                setSuccessMessage('Blog posted')
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000);
                setTitle('')
                setBlogs(blogs.concat(returnedBlog))
            })
            .catch(error => {
                setErrorMessage(`Error: ${error.response.data.error}`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000);
            })
    } 

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Blog
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Create new blog</DialogTitle>
                <DialogContent>
                <TextareaAutosize placeholder="Type Here" minRows={8} onChange={({target}) => setTitle(target.value)} style={{width:550, fontFamily:'Roboto', fontSize:15}}/>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addBlog}>create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateBlog