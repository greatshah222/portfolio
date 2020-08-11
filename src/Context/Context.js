import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
export const GithubContext = createContext();
function GitHubProviderContext({ children }) {
  const [gitHubRepos, setGitHubRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    const reposInfo = async () => {
      clearError();
      setLoading(true);
      try {
        const res = await axios(
          `${rootUrl}/users/greatshah222/repos?per_page=100`
        );
        await setGitHubRepos(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    reposInfo();
  }, []);
  return (
    <GithubContext.Provider
      value={{
        gitHubRepos,
        loading,
        error,
        clearError: clearError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GitHubProviderContext;
