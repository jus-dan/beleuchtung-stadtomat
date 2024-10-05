input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
})
let Poti = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
let Hysterese = 5
let Poti_alt = 0
basic.forever(function () {
    Poti = pins.analogReadPin(AnalogReadWritePin.P1)
    if (Poti != Poti_alt) {
        Poti_alt = Poti
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(Math.map(Poti, 0, 1023, 0, 255))
        strip.show()
    }
    basic.pause(10)
})
