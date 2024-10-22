import React, { useState } from 'react';

const UserProfile = () => {
  const users = [
    { name: 'Jane Doe', age: 28, profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'Love to travel, cook, and meet new people. Always up for an adventure!', interests: ['Travel', 'Cooking', 'Yoga', 'Music', 'Photography'], email: 'jane@example.com', phone: '123-456-7890' },
    { name: 'John Smith', age: 32, profilePicture: 'https://randomuser.me/api/portraits/men/45.jpg', bio: 'Avid reader, tech enthusiast, and runner. Always chasing the next big idea.', interests: ['Tech', 'Running', 'Reading', 'Hiking'], email: 'john@example.com', phone: '234-567-8901' },
    { name: 'Emily Johnson', age: 25, profilePicture: 'https://randomuser.me/api/portraits/women/46.jpg', bio: 'Fashion designer who loves painting and outdoor activities. Always exploring creativity!', interests: ['Fashion', 'Art', 'Traveling', 'Nature'], email: 'emily@example.com', phone: '345-678-9012' },
    { name: 'Michael Brown', age: 30, profilePicture: 'https://randomuser.me/api/portraits/men/46.jpg', bio: 'Entrepreneur and foodie. Can’t say no to a good book or a culinary adventure!', interests: ['Food', 'Business', 'Books', 'Traveling'], email: 'michael@example.com', phone: '456-789-0123' },
    { name: 'Sophia Williams', age: 27, profilePicture: 'https://randomuser.me/api/portraits/women/47.jpg', bio: 'Yoga instructor with a passion for wellness and meditation. Loves to be outdoors.', interests: ['Yoga', 'Wellness', 'Meditation', 'Nature'], email: 'sophia@example.com', phone: '567-890-1234' },
    { name: 'James Miller', age: 35, profilePicture: 'https://randomuser.me/api/portraits/men/47.jpg', bio: 'Software engineer with a love for gaming and sci-fi. Always coding something cool!', interests: ['Coding', 'Gaming', 'Sci-Fi', 'Movies'], email: 'james@example.com', phone: '678-901-2345' },
    { name: 'Olivia Davis', age: 29, profilePicture: 'https://randomuser.me/api/portraits/women/48.jpg', bio: 'Photographer capturing moments of life. Love hiking and exploring new landscapes.', interests: ['Photography', 'Hiking', 'Exploring', 'Art'], email: 'olivia@example.com', phone: '789-012-3456' },
    { name: 'David Wilson', age: 33, profilePicture: 'https://randomuser.me/api/portraits/men/48.jpg', bio: 'Guitarist in a band and music lover. Can’t live without tunes and adventures!', interests: ['Music', 'Guitar', 'Adventures', 'Traveling'], email: 'david@example.com', phone: '890-123-4567' },
    { name: 'Emma Clark', age: 26, profilePicture: 'https://randomuser.me/api/portraits/women/49.jpg', bio: 'Digital marketer with a love for travel and food. Enjoys good company and good vibes.', interests: ['Marketing', 'Food', 'Travel', 'Good Vibes'], email: 'emma@example.com', phone: '901-234-5678' },
    { name: 'Chris Evans', age: 34, profilePicture: 'https://randomuser.me/api/portraits/men/49.jpg', bio: 'Fitness coach and mountain climber. Always chasing new challenges.', interests: ['Fitness', 'Climbing', 'Outdoor Adventures', 'Sports'], email: 'chris@example.com', phone: '012-345-6789' },
    { name: 'Ava Martinez', age: 24, profilePicture: 'https://randomuser.me/api/portraits/women/50.jpg', bio: 'Graphic designer who loves painting and exploring cities.', interests: ['Design', 'Art', 'Traveling', 'Cities'], email: 'ava@example.com', phone: '123-456-7891' },
    { name: 'Daniel Harris', age: 31, profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg', bio: 'Tech enthusiast and coffee lover. Constantly learning new things.', interests: ['Tech', 'Coffee', 'Reading', 'Learning'], email: 'daniel@example.com', phone: '234-567-8902' },
    { name: 'Grace Lee', age: 29, profilePicture: 'https://randomuser.me/api/portraits/women/51.jpg', bio: 'Environmental scientist who loves the outdoors and sustainability.', interests: ['Environment', 'Sustainability', 'Travel', 'Hiking'], email: 'grace@example.com', phone: '345-678-9013' },
    { name: 'Liam Johnson', age: 33, profilePicture: 'https://randomuser.me/api/portraits/men/51.jpg', bio: 'Professional photographer capturing life’s moments.', interests: ['Photography', 'Travel', 'Nature'], email: 'liam@example.com', phone: '456-789-0124' },
    { name: 'Isabella Martinez', age: 26, profilePicture: 'https://randomuser.me/api/portraits/women/52.jpg', bio: 'Fashion blogger with a love for design and styling.', interests: ['Fashion', 'Blogging', 'Travel'], email: 'isabella@example.com', phone: '567-890-1235' },
    { name: 'Noah Thompson', age: 30, profilePicture: 'https://randomuser.me/api/portraits/men/52.jpg', bio: 'Fitness trainer and wellness coach.', interests: ['Fitness', 'Wellness', 'Nutrition'], email: 'noah@example.com', phone: '678-901-2346' },
    { name: 'Ava Brown', age: 27, profilePicture: 'https://randomuser.me/api/portraits/women/53.jpg', bio: 'Tech entrepreneur passionate about startups.', interests: ['Tech', 'Startups', 'Innovation'], email: 'ava.brown@example.com', phone: '789-012-3457' },
    { name: 'Ethan Green', age: 29, profilePicture: 'https://randomuser.me/api/portraits/men/53.jpg', bio: 'Adventure seeker and outdoor enthusiast. Love hiking, camping, and nature photography.', interests: ['Adventure', 'Camping', 'Nature Photography', 'Travel', 'Cooking'], email: 'ethan@example.com', phone: '890-123-4568' }
  ];

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
            <h2 style={styles.name}>{user.name}, {user.age}</h2>
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
              <p><strong>Phone:</strong> {user.phone}</p>
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
