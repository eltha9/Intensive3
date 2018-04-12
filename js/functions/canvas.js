// Get the canvas
const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 667
canvas.height = 375

const canvasHeight = canvas.height
const canvasWidth = canvas.width

// Export the data that other functions need
export default {
    ctx,
    canvasWidth,
    canvasHeight
}
