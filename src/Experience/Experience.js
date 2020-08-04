import React, { useState, useEffect } from 'react';
import classes from './Experience.module.css';
import Button from '../Shared/Button/Button';
import { FaServicestack, FaCertificate, FaLink } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  const [contenttext, setcontentText] = useState();
  const contentExperience = (
    <div data-aos='fade-up-left' className={classes.ExperienceInfo}>
      <div className={classes.title}>Full Stack Web Developer</div>
      <div className={classes.tag}>Village Dev helping Organization</div>
      <div className={classes.TimePeriod}> May 2018- May 2019</div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Design and Maintain web sites using Php Framework Laravel
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Write, design or edit web page content or direct other producing
          content.
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Identify problems uncovered by testting or customer feedback and
          correct probelms or refer problems to appropriate personal for
          correction
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Working alone or as a part of the team to ensure that project
          deadlines are met
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Develop and document style guidelines for website content
        </div>
      </div>
    </div>
  );
  const contentThesis = (
    <div data-aos='fade-up-right' className={classes.ExperienceInfo}>
      <div className={classes.title}>Bachelor's Thesis</div>
      <div className={classes.tags}>
        <div className={classes.tag}>
          DESIGNING OF WEBSITE ALONG WITH BLOG AND FORUM USING LARAVEL
        </div>
        <div className={`${classes.tag} ${classes.thesisLink}`}>
          <a
            href='https://www.theseus.fi/bitstream/handle/10024/160369/Shah_Bishal.pdf?sequence=1&isAllowed=y'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>

      <div className={classes.TimePeriod}> May 2019</div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          The main objective of this bachelor’s thesis was to develop a
          user-friendly responsive website along with a forum, blog and donation
          platform. The website can be used to share the stories, experience and
          donating for the cause.
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          This project work was carried out in cooperation with Village
          Development Helping Organization which is one of the non-profit social
          organization working in Nepal
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          The web application was built using the PHP framework Laravel which
          eliminates the developer time and helps in deploying the application
          rapidly. The MAMP localhost was used for the development of the
          project locally. Admin panels were created to manage and make the
          website dynamic whereas the Stripe payment system was used for the
          handling of the donation system.
        </div>
      </div>
    </div>
  );

  const contentCertificate = (
    <div data-aos='fade-up' className={classes.ExperienceInfo}>
      <div className={classes.title}>Online Course Certificates</div>
      <div className={classes.tags}>
        {' '}
        <div className={classes.tag}>Udemy</div>
        <div className={classes.tag}>PRogramming with mosh</div>
      </div>

      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>

        <div className={classes.text}>
          React - The Complete Guide (incl Hooks, React Router, Redux)
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          The Complete JavaScript Course 2020: Build Real Projects!
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          The Web Developer Bootcamp by Colt Steele{' '}
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          Laravel 2019, the complete guide by kati Frantz{' '}
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          Forum App with Pusher Laravel & vuejs by Sarthak Shrivastava{' '}
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaCertificate className={classes.socialIcon} />
        </div>
        <div className={classes.text}>
          Mastering React by Mosh Hamedani{' '}
          <a
            href='https://www.udemy.com/certificate/UC-03424575-82cc-4219-b94d-44b22aefda33/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>{' '}
        </div>
      </div>
    </div>
  );
  let contentEducation;
  contentEducation = (
    <div data-aos='fade-right' className={classes.ExperienceInfo}>
      <div className={classes.title}>Engineering in Information Technology</div>
      <div className={classes.tag}>Oulu university of applied science</div>
      <div className={classes.TimePeriod}> August 2015- August 2019</div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Knowledge of Markup language along with Javascript, Php, Laravel,
          Express, ,CodeIgniter, React and Node JS.
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Software processes and activities at different phases using different
          tools
        </div>
      </div>{' '}
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Ability to analyze testing sessions and write usability reports
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>Advanced web and mobile application</div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Solving problems in object-oriented style.
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>Modern cloud service techniques</div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Agile methods and tools in mobile software and product development
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Business models in the mobile application business
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>Overview if IoT solutions</div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Knowledge of both structured (Sql) and non-structured (MongoDB)
          Database
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    setcontentText(
      <div data-aos='fade-right' className={classes.ExperienceInfo}>
        <div className={classes.title}>
          Engineering in Information Technology
        </div>
        <div className={classes.tag}>Oulu university of applied science</div>
        <div className={classes.TimePeriod}> August 2015- August 2019</div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Knowledge of Markup language along with Javascript, Php, Laravel,
            Express, ,CodeIgniter, React and Node JS.
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Software processes and activities at different phases using
            different tools
          </div>
        </div>{' '}
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Ability to analyze testing sessions and write usability reports
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Advanced web and mobile application
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Solving problems in object-oriented style.
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>Modern cloud service techniques</div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Agile methods and tools in mobile software and product development
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Business models in the mobile application business
          </div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>Overview if IoT solutions</div>
        </div>
        <div className={classes.textPrimary}>
          <div className={classes.icon}>
            <FaServicestack
              className={classes.socialIcon}
              color='var(--darkBlue)'
            />
          </div>
          <div className={classes.text}>
            Knowledge of both structured (Sql) and non-structured (MongoDB)
            Database
          </div>
        </div>
      </div>
    );

    AOS.init({ duration: 5000 });
  }, []);
  if (!contenttext) {
    return <p>Loading....</p>;
  }
  return (
    contenttext && (
      <section className={classes.Experience}>
        <h2>Experience & Education</h2>

        <div className={classes.ExperiencePrimary}>
          <div className={classes.ExperienceLinks}>
            <NavLink
              to='/'
              exact
              onClick={() => setcontentText(contentEducation)}
              activeClassName={classes.active}
            >
              Education
            </NavLink>

            <NavLink
              exact
              to='/experience'
              onClick={() => setcontentText(contentExperience)}
              activeClassName={classes.active}
            >
              Experience
            </NavLink>
            <NavLink
              exact
              to='/certificate'
              onClick={() => setcontentText(contentCertificate)}
              activeClassName={classes.active}
            >
              Certificate
            </NavLink>
            <NavLink
              exact
              to='/thesis'
              onClick={() => setcontentText(contentThesis)}
              activeClassName={classes.active}
            >
              Thesis
            </NavLink>
          </div>

          {contenttext}
        </div>
        <div className={classes.moreInfo}>
          {' '}
          <Button btnType='hire' style={{ padding: '10px 35px' }}>
            More Info
          </Button>
        </div>
      </section>
    )
  );
}

export default Experience;