import React from 'react'
import { useParams } from 'react-router-dom';

const Users = () => {
    const { name } = useParams();
    return (
        <div>
            <h1>User Component: {name}</h1>
        </div>
    )
}

export default Users