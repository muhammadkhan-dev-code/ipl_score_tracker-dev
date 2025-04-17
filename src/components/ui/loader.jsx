// loader.jsx
import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <FadeLoader
  color="#FFBF00 "
  cssOverride={{}}
  height={20}
  loading
  margin={3}
  radius={20}
  speedMultiplier={1}
  width={10}
/>
    </div>
  );
};

export default Loader;
