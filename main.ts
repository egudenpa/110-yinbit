function レインボー () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < LED数; index++) {
        strip.rotate(1)
        basic.pause(10)
        strip.show()
    }
}
function 順番に色替え2_1441 (色15: number) {
    変更するLEDNO = 0
    for (let index = 0; index < LED数; index++) {
        strip.setPixelColor(LEDBto - 変更するLEDNO, 色15)
        strip.show()
        変更するLEDNO += 1
    }
}
input.onGesture(Gesture.ScreenUp, function () {
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.Purple), neopixel.colors(NeoPixelColors.Violet))
})
input.onGesture(Gesture.TiltRight, function () {
    if (MODE2 == 0) {
        MODE2 = 1
    }
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.White), neopixel.colors(NeoPixelColors.Yellow))
})
function CHECKMODE (MODE: number, 色1: number, 色2: number) {
    if (MODE >= 1) {
        変更後の色1 = 色1
        変更する色2 = 色2
    } else {
    	
    }
    if (MODE == 1) {
        順番に色替え3(色1)
    } else if (MODE == 2) {
        レインボー()
    } else if (MODE == 3) {
        コメット()
    } else if (MODE == 4) {
        レインボー切り替え()
    } else if (MODE == 5) {
        ゆうとSP()
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    MODE2 += 1
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.White), neopixel.colors(NeoPixelColors.Violet))
})
function コメット () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    変更するLEDNO = 0
    for (let index = 0; index < 20; index++) {
        strip.setPixelColor(変更するLEDNO, 変更後の色1)
        変更するLEDNO += 1
    }
    for (let index = 0; index < LED数; index++) {
        basic.pause(3)
        strip.shift(1)
        strip.show()
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Yellow))
})
function _2色ループ () {
    順番に色替え1_1144(変更後の色1)
    順番に色替え2_1441(変更する色2)
}
function 順番に色替え3 (色13: number) {
    変更するLEDNO = 0
    for (let index = 0; index < LEDA面数; index++) {
        strip.setPixelColor(変更するLEDNO, 色13)
        strip.setPixelColor(LEDBto - 変更するLEDNO, 色13)
        strip.show()
        変更するLEDNO += 1
    }
}
input.onGesture(Gesture.LogoUp, function () {
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Indigo))
})
function 順番に色替え1_1144 (色12: number) {
    変更するLEDNO = 0
    for (let index = 0; index < LED数; index++) {
        strip.setPixelColor(変更するLEDNO, 色12)
        strip.show()
        変更するLEDNO += 1
    }
}
input.onGesture(Gesture.Shake, function () {
	
})
function 順番に色替え4 (色14: number) {
    変更するLEDNO = 0
    for (let index = 0; index < LEDA面数; index++) {
        strip.setPixelColor(LEDAto - 変更するLEDNO, 色14)
        strip.setPixelColor(LEDBfrom + 変更するLEDNO, 色14)
        strip.show()
        変更するLEDNO += 1
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.Yellow), neopixel.colors(NeoPixelColors.White))
})
function SHOWAURA () {
    if (MODE2 == 1) {
        _2色ループ()
    } else if (MODE2 == 2) {
        レインボー()
    } else if (MODE2 == 3) {
        コメット()
    } else if (MODE2 == 4) {
        レインボー切り替え()
    } else if (MODE2 == 5) {
        ゆうとSP()
    } else {
    	
    }
}
input.onGesture(Gesture.LogoDown, function () {
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Orange))
})
input.onButtonPressed(Button.AB, function () {
    MODE2 = 5
    CHECKMODE(MODE2, neopixel.colors(NeoPixelColors.White), neopixel.colors(NeoPixelColors.Violet))
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    MODE2 = 0
    順番に色替え3(neopixel.colors(NeoPixelColors.Black))
})
function レインボー切り替え () {
    色相 = 0
    for (let index = 0; index < 25; index++) {
        色相 += 10
        strip.showColor(neopixel.hsl(色相, 200, 25))
        basic.pause(100)
    }
    basic.pause(1000)
    for (let index = 0; index < 25; index++) {
        色相 += 10
        strip.showColor(neopixel.hsl(色相, 200, 25))
        basic.pause(100)
    }
    basic.pause(1000)
}
function ゆうとSP () {
    変更するLEDNO = 0
    for (let index = 0; index < 25; index++) {
        for (let index = 0; index < 2; index++) {
            strip.setPixelColor(変更するLEDNO, neopixel.colors(NeoPixelColors.Blue))
            変更するLEDNO += 1
        }
        for (let index = 0; index < 3; index++) {
            strip.setPixelColor(変更するLEDNO, neopixel.colors(NeoPixelColors.Green))
            変更するLEDNO += 1
        }
    }
    strip.show()
    for (let index = 0; index < LED数; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
}
let 色相 = 0
let 変更する色2 = 0
let 変更後の色1 = 0
let 変更するLEDNO = 0
let strip: neopixel.Strip = null
let LEDBto = 0
let LEDBfrom = 0
let LEDAto = 0
let LEDA面数 = 0
let LED数 = 0
let MODE2 = 0
MODE2 = 0
LED数 = 122
LEDA面数 = 61
let LEDAfrom = 0
LEDAto = 60
let LEDB面数 = 62
LEDBfrom = 61
LEDBto = 121
strip = neopixel.create(DigitalPin.P0, LED数, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    basic.showString("" + (MODE2))
    SHOWAURA()
})
