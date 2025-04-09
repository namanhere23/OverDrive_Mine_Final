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
      } else {
        setError('User not found or error in API');
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Codeforces User Info</h2>
      <input
        type="text"
        placeholder="Enter Codeforces handle"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />
      <button onClick={fetchUserInfo} style={{ marginLeft: '10px' }}>
        Get Info
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: '20px' }}>
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

export default CodeforcesUserInfo;
