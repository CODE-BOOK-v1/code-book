import React from 'react'
import { Grid } from '@material-ui/core';
import { PostComponent } from './Post/PostComponent'
import { CommentChat } from './Comment-Chat/CommentChat';
import './Component.css';


export const Component = () => {
    return (
        <div className="create-post-container">
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <PostComponent />
                </Grid>
                <Grid item xs={5}>
                    <CommentChat />
                </Grid>
            </Grid>
        </div>
    )
}
