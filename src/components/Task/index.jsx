import { useRef } from 'react';
import './style.css'

export default function Task (props) {

  return (
    <div className="Task">
      <div className="TaskDescription">
        <input className="status" type="checkbox" name="to-do"></input>
        <span> {props.description} </span> 
      </div>
      
      <div className="TaskActions">
        
        <button className='danger' onClick={() => props.removeCallback(props.taskId)}>
          <span class="material-symbols-outlined">
            delete
          </span>
        </button>
        <button className='edit' onClick={() => props.editCallback(props.taskId)} >
          <span class="material-symbols-outlined">
            edit_note
          </span>
        </button>
      </div>
      
    </div>
  );

 
}