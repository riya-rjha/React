import React, { useState } from 'react';
import { useSelector } from 'react-redux';// used to access values 

function Profile() {
    const user = useSelector((state) => state.user.value);

    const themeColor = useSelector((state) => state.theme.value);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="login-form" style={{color: themeColor}}>
            <label htmlFor="name">Name: {user.name}</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name">Age: {user.age}</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <label htmlFor="email">Email: {user.email}</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}

export default Profile
