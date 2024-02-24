import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user1 = {
        name: 'John Doe',
        username: 'john_doe',
        email: 'john@example.com',
      };

    try {
      const response = await axios.post('http://localhost:3001/user',user1, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('User added:', response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
