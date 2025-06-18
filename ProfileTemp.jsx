import React, { useState } from 'react';

const Profile = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Details
      </button>
      {show && <p>This is a detailed paragraph shown on button click.</p>}
    </div>
  );
};

export default Profile;