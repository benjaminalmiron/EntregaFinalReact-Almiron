import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';

function Loader() {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        zIndex: 1000 // 
      }}
    >
      <SpinnerCircularFixed 
        size={50} 
        thickness={100} 
        speed={89} 
        color="rgba(172, 57, 139, 1)" 
        secondaryColor="rgba(0, 0, 0, 0.44)" 
      />
    </div>
  );
}

export default Loader;