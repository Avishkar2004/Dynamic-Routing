import React from 'react';
import './index.css';
import Data from './Data';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Users from './Users';

const Profile = () => {
    return (
        <div className='profile'>
            <Router>
                <h1>React Dynamic Routing</h1>
                {Data.map((items) =>
                    <div key={items.id}>
                        <Link to={`/user/${items.name}`}>{items.name}</Link>
                    </div>
                )}
                <Routes>
                    <Route path="/user/:name" element={<Users />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Profile;
