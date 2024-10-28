import React, { useEffect, useState } from 'react';

const UserProfile = () => {
 const [users, setUsers] = useState([]);
 useEffect(() => {
  fetch('http://localhost:3000/users')
     .then(response => response.json())
     .then(data => setUsers(data))
     .catch(error => console.error('Error fetching data:', error));
 })

  const [visibleCount, setVisibleCount] = useState(8);
  const [likes, setLikes] = useState(Array(users.length).fill(0));
  const [liked, setLiked] = useState(Array(users.length).fill(false));
  const [filter, setFilter] = useState('');

  const loadMoreUsers = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, users.length));
  };

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] += liked[index] ? -1 : 1;
      return newLikes;
    });
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.interests.some(interest => interest.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Filter by name or interests"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.filterInput}
      />
      <div style={styles.profileGrid}>
        {filteredUsers.slice(0, visibleCount).map((user, index) => (
          <div key={index} style={styles.profileCard}>
            <img
              src={user.profilePicture}
              alt={`${user.name} profile`}
              style={styles.profilePicture}
            />
            <h2 style={styles.username}>{user.username}, {user.age}</h2>
            <p style={styles.bio}>{user.bio}</p>
            <div style={styles.interests}>
              <h3 style={styles.interestsTitle}>Interests:</h3>
              <ul>
                {user.interests.map((interest, i) => (
                  <li key={i} style={styles.interestItem}>{interest}</li>
                ))}
              </ul>
            </div>
            <div style={styles.contactInfo}>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.password}</p>
            </div>
            <div style={styles.likeSection}>
              <button
                onClick={() => handleLike(index)}
                style={liked[index] ? styles.likedButton : styles.likeButton}
              >
                {liked[index] ? '💔 Unlike' : '❤️ Like'}
              </button>
              <span style={styles.likeCount}>{likes[index]} likes</span>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredUsers.length && (
        <button onClick={loadMoreUsers} style={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

// Inline styles for the component with responsive grid
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '130px 20px 20px 20px',
    backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/75/58/44/360_F_175584443_8pltoaPLQhhUBcX0WUyjwTPruiPKv4ot.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  filterInput: {
    padding: '20px',
    width: '80%',
    maxWidth: '500px',
    marginBottom: '40px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
   
},

  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px 20px ',
    width: '100%',
    maxWidth: '1500px',
  },
  profileCard: {
    padding: '20px 40px',
    borderRadius: '10px',
    backgroundColor: '#ffebee',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  name: {
    marginBottom: '10px',
    fontSize: '1.6em',
    color: '#d81b60',
  },
  bio: {
    marginBottom: '10px',
    fontSize: '15px',
    color: '#666',
  },
  interests: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  interestsTitle: {
    marginBottom: '5px',
    fontSize: '1.2em',
    color: '#d81b60',
  },
  interestItem: {
    color: '#333',
  },
  contactInfo: {
    margin: '10px 0',
    fontSize: '14px',
    color: '#666',
    textAlign: 'left',
  },
  likeSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  likeButton: {
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  likedButton: {
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#ffcccc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  likeCount: {
    fontSize: '16px',
    color: '#d81b60',
  },
  loadMoreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfile;
