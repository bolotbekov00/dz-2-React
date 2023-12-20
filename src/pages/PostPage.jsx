import { useState, useEffect } from "react";
import axios from "axios";
import {Link, useSearchParams} from "react-router-dom";


const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            console.log(posts)
        };
        fetchPosts();
    }, []);


    useEffect(() => {
        if (!searchParams.get("users"))return
        const fetchPosts = async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?userId=${searchParams.get("users")}`
            );
            setPosts(response.data);
        };
        fetchPosts();
    }, [searchParams])

    return <div>
        <ul className="ul-users">
            <li onClick={() => setSearchParams({})}>Показать все</li>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => (
                <li onClick={() => setSearchParams({users: user})}>
                    User:{user}
                </li>
            ))}
        </ul>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>;
};
export default PostsPage;