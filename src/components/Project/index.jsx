import { removeHyphensAndCapitalize } from '../../utils/helpers';
import * as projects from '../../assets';
import PropTypes from 'prop-types';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={projects[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
