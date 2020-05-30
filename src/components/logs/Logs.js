import React, {useState, useEffect} from 'react'
import LogItem from './LogItem';

const Logs = () => {

    const [logs,setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading){
        return <h4>loading</h4>
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

export default Logs
