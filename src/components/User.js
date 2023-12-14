import React, { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>
        Count: {count} Count2: {count2}
      </h1>
      <h2>Name: Shikha</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: shikharajput1224@gmail.com</h4>
    </div>
  );
};

export default User;
