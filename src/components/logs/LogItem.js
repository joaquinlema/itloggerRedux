import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const LogItem = ({log}) => {
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.completed ? 'red-text' : 'blue-text'}`}
                >
                    {log.title}</a>
                <span className='grey-text'>
                    <span className='black-text'>
                        Id: #{log.id}
                    </span>
                    <span className='black-text'>
                        User id: #{log.userId}
                    </span>
                    <span className='black-text'>
                        Last Comments on <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment>
                    </span>
                </span>
            </div>
        </li>
    );
};


LogItem.propTypes = {
    log:PropTypes.object.isRequired,
};


export default LogItem;
