import { useState, useEffect } from 'react'
function Content() {
    const tags = ['posts', 'todos', 'photos']
    const [type, setType]  = useState('posts')
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleClick = (type) => {
        setType(type)
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then((data) => {
                setPosts(data)
            })
    }, [type])
    return (
        <div>
            <input 
                value={title}
                onChange={handleInput}
            />
            {tags.map((tag, index) => 
                <button 
                    key={index} 
                    onClick={() => handleClick(tag)}
                    style={tag === type ? { backgroundColor: '#000', color: '#fff'} : {}}
                >
                    {tag}
                </button>
            
            )}
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}
export default Content






