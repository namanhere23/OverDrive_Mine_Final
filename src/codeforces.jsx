import React, { useState } from "react";
import Chalk from "./Chalk";

function CodeforcesUserInfo() {
  const [handle, setHandle] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserInfo = async () => {
    setError("");
    setUserData(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setUserData(data.result[0]);
      } else {
        setError("User not found or error in API");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Codeforces Info</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter Codeforces handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchUserInfo()}
          style={styles.input}
        />

        <button onClick={fetchUserInfo} style={styles.button}>
          Search
        </button>
      </div>

      {loading && <Chalk />}
      {error && <p style={styles.error}>{error}</p>}

      {userData && (
        <div style={styles.result}>
          <p>
            <strong>Handle:</strong> {userData.handle}
          </p>
          <p>
            <strong>Rank:</strong> {userData.rank}
          </p>
          <p>
            <strong>Rating:</strong> {userData.rating}
          </p>
          <p>
            <strong>Max Rank:</strong> {userData.maxRank}
          </p>
          <p>
            <strong>Max Rating:</strong> {userData.maxRating}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "white",
    color: "black",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "40px auto",
  },
  heading: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default CodeforcesUserInfo;
