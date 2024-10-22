import React, { useState } from 'react';
import './SignUp.css'; 

const SignUp = ({ addUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [bio, setBio] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      name,
      age: parseInt(age, 10),
      profilePicture: profilePicture || 'https://randomuser.me/api/portraits/lego/0.jpg',
      bio,
      interests: interests.split(',').map((interest) => interest.trim()),
    };

    addUser(newUser);

    setName('');
    setAge('');
    setProfilePicture('');
    setBio('');
    setInterests('');
  };

  return (
    <div style={styles.container}>
      <h2 className='title'>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Profile Picture URL"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Short bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={styles.textarea}
          required
        />
        <input
          type="text"
          placeholder="Interests (comma-separated)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" className="styled-button">
          <b>SignUp</b>
        </button>
      </form>
    </div>
  );
};

// Inline style
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '200px 20px 20px 20px',
    backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/75/58/44/360_F_175584443_8pltoaPLQhhUBcX0WUyjwTPruiPKv4ot.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '76vh',
  },
  title: {
    fontSize: '5.5rem',
    marginBottom: '20px',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    border: '2px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    height: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};

export default SignUp;
