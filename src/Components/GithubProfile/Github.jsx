// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ToggleO from '../../OwnedComponents/ToggleO';
import GitHubProfile from './GithubProfile';
import Back from '../Loaders/Rippling/RipplingBack'
const Github = () => {
  const [username, setUsername] = useState('sagrsuri'); // Default username

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-slate-950">
     
      <div className='flex justify-center items-center align-middle'>
      <Back/>
      </div>
      <ToggleO />
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 my-3 border bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          placeholder="Enter GitHub username..."
        />
      </div>
      <GitHubProfile username={username} />
    </div>
  );
};

export default Github;
