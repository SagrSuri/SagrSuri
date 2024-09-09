// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const GitHubProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user profile, repositories, and gists
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data and repositories
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        const gistsResponse = await axios.get(`https://api.github.com/users/${username}/gists`);
        
        setUserData(userResponse.data);
        
        // Sort repositories by creation date (latest first)
        const sortedRepos = reposResponse.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRepos(sortedRepos);
        setGists(gistsResponse.data);
        
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  if (loading) return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
  if (error) return <div className="text-center text-red-500 dark:text-red-400">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      {/* User Profile Section */}
      {userData && (
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="w-20 h-20 rounded-full border-4 border-indigo-600 dark:border-indigo-400"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              {userData.name || userData.login}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">@{userData.login}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {userData.bio || 'No bio available'}
            </p>
          </div>
        </div>
      )}

      {/* Repositories Section */}
      <h2 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
        Latest Repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {repos.slice(0, 100).map((repo) => (
          <div
            key={repo.id}
            className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition duration-300"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400"
            >
              {repo.name}
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              {repo.description || 'No description'}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              ⭐ {repo.stargazers_count} stars | 🕒 Created on {new Date(repo.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      {/* Gists Section */}
      <h2 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Latest Gists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gists.slice(0, 50).map((gist) => (
          <div
            key={gist.id}
            className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition duration-300"
          >
            <a
              href={gist.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400"
            >
              {Object.keys(gist.files)[0]}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {gist.description || 'No description'}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              🕒 Created on {new Date(gist.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProfile;
