import React, { useContext } from 'react';
import { GithubContext } from '../../Context/Context';
import Doughnut2d from '../Charts/Dougnnut2d';
import Bar3D from '../Charts/Bar3D';
import { FaGithubSquare } from 'react-icons/fa';
import classes from './Repos.module.css';
import Spinner from '../../Shared/Spinner/Spinner';

function Repos() {
  const { gitHubRepos, loading } = useContext(GithubContext);

  let top4ProgammingLanguage;
  let top5PopularRepo;
  if (gitHubRepos) {
    let mostUsedlanguages;
    const languages = gitHubRepos
      .filter((el) => el.language !== null)
      .map((el) => el.language)
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});

    mostUsedlanguages = [];
    Object.keys(languages).forEach((el) =>
      mostUsedlanguages.push({ label: el, value: languages[el] })
    );
    top4ProgammingLanguage = Object.values(mostUsedlanguages)
      .sort((a, b) => b - a)
      .slice(0, 4);

    // most popular repos
    let mostPopularRepo = [];
    gitHubRepos
      .filter((el) => el.language !== null && el.stargazers_count !== 0)
      .forEach((el) => {
        return mostPopularRepo.push({
          label: el.name,
          value: el.stargazers_count,
        });
      });
    top5PopularRepo = Object.values(mostPopularRepo)
      .sort((a, b) => b - a)
      .slice(0, 5);
  }
  if (loading || !gitHubRepos) {
    return (
      <div className={classes.RepoPrimary}>
        <div className={classes.TextContainer}>
          <h2>Github Info </h2>
          <a
            href='https://github.com/greatshah222'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare className={classes.socialIcon} />
          </a>
        </div>
        <div className={classes.ChartContainer}>
          <Spinner />
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <>
      {gitHubRepos && !loading && (
        <div className={classes.RepoPrimary}>
          <div className={classes.TextContainer}>
            <h2>Github Info </h2>
            <a
              href='https://github.com/greatshah222'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className={classes.socialIcon} />
            </a>
          </div>
          <div className={classes.ChartContainer}>
            <Doughnut2d data={top4ProgammingLanguage} />
            <Bar3D data={top5PopularRepo} />
          </div>
        </div>
      )}
    </>
  );
}

export default Repos;
