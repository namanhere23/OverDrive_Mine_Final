import React from 'react';

// Simple mock of Chalk functionality for demonstration
const Chalk = () => {
  // Sample of styled terminal outputs using Chalk-like formatting
  const examples = [
    { text: "Success message", style: { color: "#00ff00" } },
  ];

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md max-w-md mx-auto">
      
      <div className="font-mono bg-black p-3 rounded">
        {examples.map((item, index) => (
          <div key={index} className="mb-1">
            <span style={item.style}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chalk;