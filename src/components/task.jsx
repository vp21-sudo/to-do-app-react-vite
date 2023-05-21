import PropTypes from 'prop-types'
import './styles.css'
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
export default function  Task(props){
    const [Checked, setChecked] = useState(props.taskCompleted);
    const handleCheck = (e) => {
        e.persist()
        setChecked(!Checked)
    }
    useEffect(() => {
        
    }, [Checked]);
    return (
        <div className='task-main'>
            <h2 className='task-title'>{props.taskTitle}</h2>
            <input type='checkbox' className='task-checkbox' checked={Checked} onChange={e=>handleCheck(e)}/>
            <div className='delete-btn'><CloseIcon fontSize='large'/></div>
        </div>
    )
}

Task.propTypes = {
    taskTitle: PropTypes.string,
    taskCompleted: PropTypes.bool
}