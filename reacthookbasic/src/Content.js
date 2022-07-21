import React, { useEffect, useState, memo} from 'react';

function Content(){
    const tabs = ['posts', 'comments', 'albums']

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType]   = useState('posts')
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type])

    const [show, setShow] = useState(false)

    const handleGotoTop=()=>{
        setShow(window.scrollY >= 300)
    }
    
    useEffect(() =>{
        window.addEventListener('scroll', handleGotoTop)

        return () => {
            window.removeEventListener('scroll', handleGotoTop)
        }
    }, [])

    useEffect(() =>{
        window.addEventListener('resize', () => setWidth(window.innerWidth))

        return ()=>{
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    })

    const [coundown, setCoundown] = useState(180)

    useEffect(() => {
       const timeInterval = setInterval(() =>{
            setCoundown(prevState => prevState - 1)
        },1000)

        return ()=> clearInterval(timeInterval)

    },[])

    const [avatar, setAvatar] = useState()

    const handlePreviewImage = (e) =>{
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    useEffect(()=>{
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    return (
        <div>
            <input 
                type='file'
                onChange={handlePreviewImage}
            />

            {avatar && (
            <img src={avatar.preview} alt='' width='80%' />
            )}
            

            <h1 style = {{marginLeft:30}}>{coundown}</h1>

            <input 
            style={{marginLeft : 30}}
            value={title}
            onChange = {e => setTitle(e.target.value)}
            />
            
            <h1>{width}</h1>

            {tabs.map(tab => (
                <button 
                style={type === tab ? {color: '#fff', backgroundColor: '#333'}:{}} 
                onClick = {()=> setType(tab)}
                key={tab}
                >{tab}</button>
            ))}

            <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
            </ul>

            {show && <button
                style={{position: 'fixed', right:20, bottom:20,marginLeft:30}}
            >
                Go to Top
            </button>
            }  
        </div>
    )

}


export default memo(Content);