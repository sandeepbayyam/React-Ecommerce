import React from 'react';
const Home = (props) => {
  return (
    <div>
      <h1 className="betterview redback">Home</h1>
      <button onClick={()=>{history.back()}}>Back</button>
    </div>
  );
};
export default Home;
