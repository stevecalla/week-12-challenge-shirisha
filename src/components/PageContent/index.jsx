import PropTypes from 'prop-types';

const PageContent = (props) => {
    return (
      <div>
        {props.children}
              </div>
    );
  };
  
PageContent.propTypes = {
    children: PropTypes.node
};

export default PageContent;
  
