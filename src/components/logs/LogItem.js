import React from 'react';
import PropTypes from 'prop-types';


const LogItem = ({log}) => {
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.completed ? 'red-text' : 'blue-text'}`}
                >
                    {log.title}</a>
            </div>
        </li>
    );
};


LogItem.propTypes = {
    log:PropTypes.object.isRequired,
};


export default LogItem;
