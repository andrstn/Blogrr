import { ListItem, Typography, Grid, Button, Box } from "@mui/material"
import React from "react"

const Blog = ({blog, user, handleLike, handleUnlike, handleRemove}) => {

    const showLike = () => blog.likes.includes(user.id)

    const date = () => blog.date.split('T')[0]

    const time = () => blog.date.split('T')[1].split('.')[0]

    return (
        <>
        <ListItem sx={{borderBottom: "1px solid rgb(212, 212, 212)"}}>
            <Grid container sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'start'
            }}>
                <Grid item xs={12} sx={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <Typography sx={{fontSize:16, fontWeight:700, my:1}}>{blog.author}</Typography>
                    <Typography sx={{fontSize:9, fontWeight:350, mb:1}}>{date()} {time()}</Typography>
                    <Typography sx={{fontSize:16, fontWeight:200}}>{blog.title}</Typography>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Typography sx={{fontSize:12, fontWeight:500, mr:2}}>{blog.likes.length} Likes</Typography>
                        {
                        showLike()
                        ? <Button variant='text' size='small' value={blog.id} onClick={handleUnlike} sx={{fontSize:10, fontWeight:500, mr:1}}>Unlike</Button>
                        : <Button variant='text' size='small' value={blog.id} onClick={handleLike} sx={{fontSize:10, fontWeight:500, mr:1}}>Like</Button>
                        }
                        <Button variant='text' size='small' value={blog.id} onClick={handleRemove} sx={{fontSize:10, fontWeight:500}}>Delete</Button>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
        </>
    )
}
export default Blog