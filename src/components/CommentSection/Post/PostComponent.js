import React, { useState } from 'react'
import { Header } from '../../Header/Header';
import { Paragraph } from '../../Paragraph/Paragraph';
import { TextArea } from '../../TextArea/TexaArea';


export const PostComponent = () => {
    const [ post, setPost ] = useState({
        title: 'promise in c program',
        description: `proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.`,
        code: `
            #include<stdio.h>
            int main(void)
            {
                int a=1,b=1;
                printf("%d",a+b);
                return 0;
            }
        `
    });
    return (
        <div style={{paddingLeft: 20}}>
            <Header label={post.title} style={{marginTop: 6}}></Header>
            <Paragraph label={post.description}style={{marginTop: 20}}/>
            <div style={{marginTop: 17}}>
                <TextArea rows={13} cols={53} secondary={true} onValue={post.code}/>
            </div>
        </div>
    )
}
