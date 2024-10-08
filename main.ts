/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Sep 2024
 * This program is a traffic light
*/

let neopixleStrip: neopixel.Strip = null
//clean
basic.clearScreen()
neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    
//green
    basic.clearScreen()
    neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.show()
    pause(1000)

//yellow
    neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.show()
    pause(1000)

//red
    neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixleStrip.show()
    pause(1000)

//clean
    neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixleStrip.show()
    basic.showIcon(IconNames.Happy)
})
