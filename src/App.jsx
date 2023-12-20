import './App.css'
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/AbautPage.jsx";
import Layout from "./components/Layout.jsx";
import PostPage from "./pages/PostPage.jsx";
import SinglePostPages from "./pages/SinglPostPAges.jsx";
import LoginPages from "./pages/LoginPages.jsx";
import ParentPages from "./pages/ParentPages.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index  element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="post" element={<PostPage/>}/>
                    <Route path="parent" element={<ParentPages/>}/>
                    <Route path="post/:postId" element={<SinglePostPages/>}/>
                    <Route path="*" element={<h2>not found</h2>}/>
                    <Route path="login" element={<LoginPages/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
