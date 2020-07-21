import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, name, username }, deleteTech }) => {
  
    const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Technician deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {name} {username}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default TechItem