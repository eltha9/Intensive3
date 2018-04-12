const countMeter = document.querySelector('.countMeter')

export default function () {
    let meter = 0
    window.speed = 4
    setInterval(() => {
        meter++
        window.speed += 0.02
        console.log(window.speed)
        countMeter.innerHTML = meter+'m'
    },700)
}