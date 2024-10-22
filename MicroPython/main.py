"""
Created by: Elliott Roach
Created on: oct 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
sleep(1000)

neopixel[0] = (0, 0, 0)
neopixel[1] = (0, 0, 0)
neopixel[2] = (0, 0, 0)
neopixel[3] = (0, 0, 0)

display.show(Image.HAPPY)

if button_a.is_pressed():
    neopixel[0] = (255, 0, 0)
    neopixel[1] = (0, 0, 0)
    neopixel[2] = (0, 0, 0)
    neopixel[3] = (0, 0, 0)
