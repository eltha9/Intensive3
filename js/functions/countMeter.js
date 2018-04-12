//Import datas
import Levels from '../levels/levels'


// Get the count meter
const countMeter = document.querySelector('.countMeter')

// export the set interval allow us to clearInterval in other functions
export default function () {

    let meter = 0
    window.speed = 4

    return setInterval(() => {
        
        // Make grow meter count and the speed 
        meter++
        window.speed += 0.02

        // Cap the speed to 9
        if (window.speed >= 9) {
            window.speed = 9
        }

        // Change the background every 100m
        if (meter % 100 == 0) {
            let randomNumber =  Math.floor(Math.random() * Levels[0].length)

            if (randomNumber == window.random) {
                randomNumber = randomNumber == 0 ? randomNumber++ : randomNumber--
                window.random = randomNumber
                
            }
            else{
                window.random = randomNumber
            }

        }
        countMeter.innerHTML = meter+'m'
    },700)
}