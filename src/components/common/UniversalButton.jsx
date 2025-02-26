import React from 'react';

// Higher-Order Component for adding universal button behavior
const withUniversalButtonBehavior = (WrappedComponent) => {
  return (props) => {
    const handleClick = (e) => {
      e.preventDefault();  // Prevent default action like hash navigation
      // Add any other behavior you want on button click
      console.log("Button clicked!");
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

// Now, use this HOC to wrap all your button components
const UniversalButton = withUniversalButtonBehavior("button");

export default UniversalButton;

