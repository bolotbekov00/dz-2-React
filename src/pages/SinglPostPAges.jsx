import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function SinglePostPAges(props) {
    const navigate = useNavigate()
    const {response, setResponse} = useState()
    const { postId} = useParams()

    useEffect(() => {
        const getPost = async () => {
            const respGet = await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            setResponse(respGet.data)
        };
        getPost()
    }, []);

    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <span>
                PostId:{postId}
            </span>
        </div>
    );
}

export default SinglePostPAges;