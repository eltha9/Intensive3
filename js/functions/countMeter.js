const countMeter = document.querySelector('.countMeter')

export default function () {
    let meter = 0
    window.speed = 4
    return setInterval(() => {
        meter++
        window.speed += 0.02
        if (window.speed >= 9) {
            window.speed = 9
        }
        console.log(window.speed)
        countMeter.innerHTML = meter+'m'
    },700)
}