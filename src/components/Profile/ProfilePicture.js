import React, { useState } from 'react';
import axios from 'axios';
import 'react-image-crop/dist/ReactCrop.css';


export const ProfilePicture =  () => {
    const [image, setImage] = useState(null);

    const onChangeHandler = event => {
        setImage(event.target.files[0]);
        console.log({uploadRef: uploadRef.current.value});
    }

    const serviceCall = data => {
        axios.post('http://localhost:5000/profile/picture', data, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODcxMjdkMDY0YzhmNThkOTZiY2UzNyIsImVtYWlsIjoiY3liZXJzcmlrYW50aDAwMkBnbWFpbC5jb20iLCJpc09yZyI6ZmFsc2UsImlhdCI6MTU4NTkzMzg1MCwiZXhwIjoxNTg2NTM4NjUwfQ.mt9xCPI2NTZ_6LjpU8FX5iN4rAyetMDDsExFL5X73qY',
                'Content-Type': 'application/json'
            },
            onUploadProgress: ProgressEvent => {
                console.log(Math.round(ProgressEvent.loaded/ProgressEvent.total*100));
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const onClickHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', image, image.name);
        serviceCall(formData);
    }
    return (
        <div>
            <input type="file" name="profile" id="profile" onChange={onChangeHandler}/>
            <button type="submit" onClick={onClickHandler}>upload</button>
        </div>
    )
}