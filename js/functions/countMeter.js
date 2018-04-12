// Get the count meter
const countMeter = document.querySelector('.countMeter')

// export the set interval allow us to clearInterval in other functions
export default function () {
    let meter = 0
    window.speed = 4
    return setInterval(() => {
        meter++
        window.speed += 0.02
        if (window.speed >= 9) {
            window.speed = 9
        }
        countMeter.innerHTML = meter+'m'
    },700)
}