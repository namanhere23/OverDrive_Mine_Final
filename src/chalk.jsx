import React from 'react';

const ChalkLine = ({ text, color = '#00FF00' }) => {
  return (
    <p style={{ color, fontFamily: 'monospace', margin: '4px 0' }}>
      {text}
    </p>
  );
};

const Chalk = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.terminal}>
        <ChalkLine text="> Fetching user info from Codeforces..." color="#00FF00" />
        <ChalkLine text="> Connecting to API..." color="#00FFAA" />
        <ChalkLine text="> Loading ⏳" color="#FFFF00" />
        <ChalkLine text="> Please wait..." color="#FF8800" />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '16px',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '20px',
  },
  terminal: {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '14px',
    boxShadow: '0 0 8px rgba(0,255,0,0.2)',
  },
};

export default Chalk;
