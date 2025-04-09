import React, { useState } from 'react';

function CodeforcesUserInfo() {
  const [handle, setHandle] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUserInfo = async () => {
    setError('');
    setUserData(null);
    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
      const data = await response.json();
      if (data.status === 'OK') {
        setUserData(data.result[0]);

        setTimeout(() => {
          const resultSection = document.getElementById('cf-result');
          if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);

      } else {
        setError('User not found or error in API');
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Codeforces User Info</h2>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter Codeforces handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchUserInfo()}
          style={styles.input}
        />
        <button onClick={fetchUserInfo} style={styles.button}>Search</button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {userData && (
        <div id="cf-result" style={styles.result}>
          <p><strong>Handle:</strong> {userData.handle}</p>
          <p><strong>Rank:</strong> {userData.rank}</p>
          <p><strong>Rating:</strong> {userData.rating}</p>
          <p><strong>Max Rank:</strong> {userData.maxRank}</p>
          <p><strong>Max Rating:</strong> {userData.maxRating}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '250px',
    backgroundColor: '#111',
    color: '#fff',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  result: {
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default CodeforcesUserInfo;
