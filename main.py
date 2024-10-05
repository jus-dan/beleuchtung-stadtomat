def on_button_pressed_a():
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    strip.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
    strip.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
strip.show()

def on_forever():
    strip.set_brightness(Math.map(pins.analog_read_pin(AnalogReadWritePin.P1), 0, 1023, 0, 255))
basic.forever(on_forever)
