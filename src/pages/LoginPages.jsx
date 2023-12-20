import React from 'react';
import {useNavigate} from "react-router-dom";

function LoginPages(props) {
    const naviGate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        naviGate('/post')
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text"/>
                <input type="password"/>
                <button>click</button>
            </form>
        </div>
    );
}

export default LoginPages;