import { useEffect, useState, memo, useMemo, useRef} from 'react'

function Content2({onIncrease}){
    const lessons = [
        {
            id:1,
            name: 'ReactJS'
        },
        {
            id:2,
            name: 'Javascript'
        },
        {
            id:3,
            name: 'Arrow Function'
        }
    ]
    const [lessonId, setLesson] = useState(1)

    useEffect(()=>{
        const handleComment =({detail})=>{
            // console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }

    },[lessonId])


    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price,
        }])

        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(()=>{
        const result = products.reduce((result, prod)=> {
            return result + prod.price
        }, 0)

        return result
    },[products])

    return(
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{color: lessonId === lesson.id ? 'red' : '#333'}}
                        onClick={()=>setLesson(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
            <button onClick={onIncrease}>Increase</button>
            <br />
            <input 
            ref={nameRef}
            value ={name}
            placeholder='Enter name...'
            onChange = {e=> setName(e.target.value)}
            />
            <br/>
            <input 
            value = {price}
            onChange = {e=> setPrice(e.target.value)}
            placeholder='Enter price...'/>
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total:{total}
            <ul>
                {products.map(product => (
                    <li key={product.name}>{product.name} - {product.price}</li>
                ))}
            </ul>

        </div>
    )
}

export default memo(Content2);