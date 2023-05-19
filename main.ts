let b = 0
basic.forever(function () {
    b = 255 - input.lightLevel()
    led.setBrightness(b)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
