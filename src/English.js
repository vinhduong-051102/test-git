import { useState, useRef, useEffect } from 'react'
function English() {
    const meanStorage = 'Bộ xử lí trung tâm, Khối điều khiển, Bộ logic toán học, Mạch sung nhịp hệ thống, Tốc độ xung nhịp xử lý, lệnh, vi mạch, đường truyền dữ liệu, Bộ nhớ truy cập ngẫu nhiên, RAM động, Các thanh ghi, Dung lượng ổ cứng, Bộ nhớ/ vùng nhớ đệm, Dung lượng, Tốc độ ổ đĩa, Dung lượng bộ nhớ, Tốc độ xử lý của CPU, tốc độ xử lý dữ liệu'.split(',')

    const vocabularyStorage = 'CPU (Central Processing Unit), control unit, Arithmetic Logic Unit (ALU), system clock, Clock speed, Instruction, integrated circuit, Bus, RAM , Synchronous dynamic random access memory( SDRAM), register, Hard disk capacity, Cache, Storage capacity, Optical drive speed, Memory size, Processor speed, Bus speed'.split(',')
    
    const newArr = []
    const [inputValue, setInputValue] = useState('')
    const [index, setIndex] = useState(() => Math.floor(Math.random() * vocabularyStorage.length))
    const [vocabulary, setVocabulary] = useState(meanStorage[index])
    const reload = () => {
        setInputValue('')
        inputRef.current.focus()
    }
    const inputRef = useRef()
    for(let i = 0; i < vocabularyStorage.length; i++) {
        newArr.push(vocabularyStorage[i].toLowerCase().trim())
    }
    
    const storageExist = []
    const handleRandom = () => {
        setIndex(Math.floor(Math.random() * vocabularyStorage.length))
        if(index) {
            console.log(`${newArr[index]}: ${meanStorage[index]}`)
            setVocabulary(meanStorage[index])
            
        }
    }
    useEffect(() => {
        window.onkeydown = (e) => {
            if(e.which === 13) {
                handleRandom()
                reload()
            }
        }
    }, [index])
    useEffect(() => {
        reload()
    }, [index])
    
    
    const handleInput = (e) => {
        const newInputValue = e.target.value
        setInputValue(newInputValue)
    }
    return (
        <div>
            <h1>{vocabulary ?? 'Ấn check'}</h1>
            <input 
                value={inputValue}
                ref={inputRef}
                onChange={handleInput}
                style={{'width': '300px'}}
            />
            
        </div>
    )
}

export default English