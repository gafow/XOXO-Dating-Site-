import React, { useState } from "react";
import Swal from "sweetalert2";
import '../App.js'

function Form({ users, setUsers }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    phone: "",
    interests: "",
    age: "",
    gender: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("https://xoxo-backend.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setUsers([...users, newUser]);
        Swal.fire({
          title: "Sweet!",
          text: "Welcome to your love journey!",
          imageUrl:
            "https://images.unsplash.com/photo-1518563795073-6b72265ad862?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Neon Love Heart",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <h1 className="character-1">Ready to Fall in Love?</h1>
      <h4 className="character-4">
        Complete the form below to start your love journey.
      </h4>
      <form className="input" onSubmit={handleOnSubmit}>
        <input
        className="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Your Name*"
        />
        <input
        className="name"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
          placeholder="Your Username*"
        />
        <input
        className="name"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Your Email*"
        />
        <input
        className="name"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleOnChange}
          placeholder="City*"
        />
        <input
        className="name"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
          placeholder="Your Phone Number*"
        />
        <input
        className="name"
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleOnChange}
          placeholder="Your Interests*"
        />
        <input
        className="name"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleOnChange}
          placeholder="Your Age*"
        />
        <input
        className="name"
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleOnChange}
          placeholder="Your Gender*"
        />
        <button className="submit" type="submit">
          Get Started
        </button>
      </form>

      <h2>Current Users</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <li key={user.id} className="user-list">
            <img
              src={user.userprofilepicture}
              alt={`${user.name}'s profile`}
              width={50}
              height={50}
            />
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Status: {user.status}</p>
            <p>Username: {user.username}</p>
            <p>Gender: {user.gender}</p>
            <p>City: {user.city}</p>
            <p>Phone: {user.phone}</p>
            <p>Interests: {user.interests}</p>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default Form;