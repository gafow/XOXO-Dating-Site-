import React, { useState } from "react";
import Swal from "sweetalert2";

function Form() {
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
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    Swal.fire({
      title: "Sweet!",
      text: "Welcome to your love journey!",
      imageUrl:
        "https://images.unsplash.com/photo-1518563795073-6b72265ad862?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Neon Love Heart",
    });
  };

  return (
    <div>
      <h1 className="character-1">Ready to Fall in Love?</h1>
      <h4 className="character-4">
        Complete the form below to start your love journey.
      </h4>
      <form className="input">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Your Name*"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
          placeholder="Your Username*"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Your Email*"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleOnChange}
          placeholder="City*"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
          placeholder="Your Phone Number*"
        />
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleOnChange}
          placeholder="Your Interests*"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleOnChange}
          placeholder="Your Age*"
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleOnChange}
          placeholder="Your Gender*"
        />
      </form>
      <button className="submit" type="submit" onClick={handleOnSubmit}>
        Get Started
      </button>
    </div>
  );
}

export default Form;
