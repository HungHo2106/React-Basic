import { useState, useCallback} from 'react'
import Content from './Content';
import Content2 from './Content2';
import TodoApp from './Todo';

 
  function App() {

    const [show, setShow] = useState(false)

    function emitComment(id){
      setInterval(() => {
        window.dispatchEvent(
          new CustomEvent(`lesson-${id}`, {
            detail:`Noi dung comment cua lesson ${id}`
          })
        )
      },2000)
    }

    emitComment(1)
    emitComment(2)
    emitComment(3)

    
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[])


    return (
        <div>
          <button 
          style={{margin: 30}}
          onClick={()=> setShow(!show)}
          >Toggle</button>
          {show && <Content />  }

          <h1>{count}</h1>
          <Content2 onIncrease = {handleIncrease}/>

          <TodoApp />
          
        </div>

    ) 

  } 

export default App;
