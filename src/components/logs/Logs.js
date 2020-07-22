import React, { useEffect} from 'react'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

//nuestro componenete ahora recibe las props tanto de las state attr y las actions
const Logs = ({log: {logs,loading}, getLogs }) => {

    useEffect(() => {
        getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading || logs === null){
        return <Preloader />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'> System logs</h4>

            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No logs at all...</p>) : 
                (logs.map( (log,index) => 
                    <LogItem log={log} key={index}/>)
                )}
            
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
  };
  

// nos traemos los attr que necesitamos del state
const mapStateProps = state => ({
    log: state.log//se llama log el state que utilizamos porque es el nombre que le asignamos en index.js del reducer
});

//todas las actions que utilicemos las importamos y las pasamos como props al componenete
export default connect(mapStateProps, { getLogs })(Logs)
