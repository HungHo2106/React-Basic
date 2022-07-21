import { useReducer, useRef, useState} from "react";
import reducer, {initState} from './reducer'
import { setJob, addJob, deleteJob} from './actions'

// 1. Tao initState bang useState
// const [job, setJob] = useState('')
// const [jobs, setJobs] = useState([])


// 2. Tao ham function khi dung useState
// const handleSubmit = ()=>{
    //     setJobs(prev => [...prev, job])
    //     setJob('')
    // }
    
    
    function TodoApp(){
        // 4.Dispatch
        const [state, dispath] = useReducer(reducer, initState)
        const {job, jobs} = state
        const refName = useRef()

        const handleSubmit = ()=>{
            dispath(addJob(job))
            dispath(setJob(''))

            refName.current.focus()
        }

    return (
        <>
            <h1>Todo List</h1>
            <input 
            ref={refName}
            value={job}
            placeholder="Enter job..."
            onChange={e => {dispath(setJob(e.target.value))}}    
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>{job}
                    <span style={{marginLeft: 10}} 
                    onClick={()=> dispath(deleteJob(index))
                    }>X</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoApp;