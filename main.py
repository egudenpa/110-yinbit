def レインボー():
    strip.show_rainbow(1, 360)
    for index in range(LED数):
        strip.rotate(1)
        strip.show()
def 順番に色替え2_1441(色15: number):
    global 変更するLEDNO
    変更するLEDNO = 0
    for index2 in range(LED数):
        strip.set_pixel_color(LED数 - 1 - 変更するLEDNO, 色15)
        strip.show()
        変更するLEDNO += 1

def on_gesture_screen_up():
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.PURPLE),
        neopixel.colors(NeoPixelColors.VIOLET))
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_tilt_right():
    global MODE2
    if MODE2 == 0:
        MODE2 = 1
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.WHITE),
        neopixel.colors(NeoPixelColors.YELLOW))
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def CHECKMODE(MODE: number, 色1: number, 色2: number):
    global 変更後の色1, 変更する色2
    if MODE >= 1:
        変更後の色1 = 色1
        変更する色2 = 色2
    else:
        pass
    if MODE == 1:
        変更後の色1 = 色1
        変更する色2 = 色2
        順番に色替え3(色1)
    elif MODE == 2:
        レインボー()
    elif MODE == 3:
        コメット()
    else:
        pass

def on_button_pressed_a():
    global MODE2
    MODE2 += 1
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.WHITE),
        neopixel.colors(NeoPixelColors.VIOLET))
input.on_button_pressed(Button.A, on_button_pressed_a)

def コメット():
    global 変更するLEDNO
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    変更するLEDNO = 0
    for index3 in range(20):
        strip.set_pixel_color(変更するLEDNO, 変更後の色1)
        変更するLEDNO += 1
    for index4 in range(LED数):
        strip.shift(1)
        strip.show()

def on_gesture_tilt_left():
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.GREEN),
        neopixel.colors(NeoPixelColors.YELLOW))
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def _2色ループ():
    順番に色替え1_1144(変更後の色1)
    順番に色替え2_1441(変更する色2)
def 順番に色替え3(色13: number):
    global 変更するLEDNO
    変更するLEDNO = 0
    for index5 in range(LEDA面数):
        strip.set_pixel_color(変更するLEDNO, 色13)
        strip.set_pixel_color(LEDBto - 変更するLEDNO, 色13)
        strip.show()
        変更するLEDNO += 1

def on_gesture_logo_up():
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.BLUE),
        neopixel.colors(NeoPixelColors.INDIGO))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def 順番に色替え1_1144(色12: number):
    global 変更するLEDNO
    変更するLEDNO = 0
    for index6 in range(LED数):
        strip.set_pixel_color(変更するLEDNO, 色12)
        strip.show()
        変更するLEDNO += 1

def on_gesture_shake():
    global MODE2
    MODE2 = 0
    順番に色替え3(neopixel.colors(NeoPixelColors.BLACK))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def 順番に色替え4(色14: number):
    global 変更するLEDNO
    変更するLEDNO = 0
    for index7 in range(LEDA面数):
        strip.set_pixel_color(LEDAto - 変更するLEDNO, 色14)
        strip.set_pixel_color(LEDBfrom + 変更するLEDNO, 色14)
        strip.show()
        変更するLEDNO += 1

def on_gesture_screen_down():
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.YELLOW),
        neopixel.colors(NeoPixelColors.WHITE))
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_gesture_logo_down():
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.RED),
        neopixel.colors(NeoPixelColors.ORANGE))
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_button_pressed_ab():
    global MODE2
    MODE2 = 3
    CHECKMODE(MODE2,
        neopixel.colors(NeoPixelColors.WHITE),
        neopixel.colors(NeoPixelColors.VIOLET))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global MODE2
    MODE2 = 0
    順番に色替え3(neopixel.colors(NeoPixelColors.BLACK))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def SHOWAURO():
    if MODE2 == 1:
        _2色ループ()
    elif MODE2 == 2:
        レインボー()
    elif MODE2 == 3:
        コメット()
    else:
        pass
変更する色2 = 0
変更後の色1 = 0
変更するLEDNO = 0
LEDBto = 0
LEDBfrom = 0
LEDAto = 0
LEDA面数 = 0
LED数 = 0
MODE2 = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 100, NeoPixelMode.RGB)
strip.set_brightness(255)
MODE2 = 0
順番に色替え3(neopixel.colors(NeoPixelColors.BLACK))
LED数 = 122
LEDA面数 = 61
LEDAfrom = 0
LEDAto = 60
LEDB面数 = 61
LEDBfrom = 61
LEDBto = 121

def on_forever():
    basic.show_string("" + str(MODE2))
    SHOWAURO()
basic.forever(on_forever)
