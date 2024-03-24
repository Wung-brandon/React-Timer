import './Time.components.css'
import { useState } from 'react'
import animals from './animals'

const Timer = () => {

    let time = new Date().toLocaleTimeString()
    // console.log(time)
    var [currentTime, getTime] = useState(time)

    function timing(){
        let newTime = new Date().toLocaleTimeString()
        getTime(newTime)
        // console.log(newTime)
    //    document.querySelector('.time').innerText = currentTime
    }
   
    setInterval(() => {
        timing()
    }, 1000)
    // concept of destructuring
    // const [cat, dog] = animals
    // console.log(cat)
    // const {name, sound, feedingRequirements: {food, water}} = cat
    // console.log(food)
    // const {name: catName, sound: soundName} = dog
    // console.log(soundName)
    // console.log(name)

    return (
        <div>
            <h1 className='time'>{currentTime}</h1>
            <button className='get-time' onClick={timing}>Get Time</button>

        </div>
    )
}


export default Timer