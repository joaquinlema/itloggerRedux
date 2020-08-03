import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({log, deleteLog, setCurrent}) => {

    const borrar = () => {
        deleteLog(log.id);
        M.toast({html: 'Log Deleted'});
    }

    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" 
                className={`modal-trigger ${log.completed ? 'red-text' : 'blue-text'}`}
                onClick={() => setCurrent(log)}
                >
                    {log.title}</a>
                    <br></br>
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
                <button type='button' onClick={borrar} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </button>
            </div>
        </li>
    );
};


LogItem.propTypes = {
    log:PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
};


export default connect(null, { deleteLog,setCurrent } )(LogItem);
