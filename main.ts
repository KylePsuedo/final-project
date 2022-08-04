//  Based off the information that was given.
//  If Button A pressed. Referenced from previous classes/Microbit
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (GENDER == 1) {
        if (rng >= 7) {
            basic.showString(" YES KING")
        } else if (rng == 6) {
            basic.showString(" RETHINK THAT!")
        } else if (rng == 5) {
            basic.showString(" Maybe...")
        } else if (rng <= 4) {
            basic.showString(" NAH KING")
        } else {
            basic.clearScreen()
        }
        
    }
    
    if (GENDER == 2) {
        if (rng >= 7) {
            basic.showString(" YAS QUEEN!", 100)
        } else if (rng == 6) {
            basic.showString(" Respin Queen", 100)
        } else if (rng == 5) {
            basic.showString(" Maybe", 100)
        } else if (rng <= 4) {
            basic.showString(" NOT WORTH IT QUEEN!", 100)
        } else {
            basic.clearScreen()
        }
        
    }
    
    if (GENDER == 3) {
        if (rng >= 7) {
            basic.showString(" YES LEADER!!")
        } else if (rng == 6) {
            basic.showString(" Retry LEADER")
        } else if (rng == 5) {
            basic.showString(" Maybe")
        } else if (rng <= 4) {
            basic.showString(" YOU DESERVE BETTER LEADER")
        } else {
            basic.clearScreen()
        }
        
    }
    
})
//  If button A and B pressed, it points up at the user and says "You are Beautiful"
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    rng = randint(0, 10)
})
//  If button B is pressed, based off the info given from Gender during the shake, it will show the gender.
//  1 = Male
//  2 = Female
//  3 = Non Binary
//  WE enjoy INCLUSION here.
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (GENDER == 1) {
        basic.showLeds(`
            . . # # #
                        . . . # #
                        . . # . .
                        # # . . .
                        # # . . .
        `)
        basic.pause(1000)
    } else if (GENDER == 2) {
        basic.showLeds(`
            . # # # .
                        . # # # .
                        . . # . .
                        . # # # .
                        . . # . .
        `)
        basic.pause(1000)
    } else {
        basic.showString("Non Binary")
    }
    
})
//  If you shake, For rng it chooses from 0 to 10
//  if you shake, for Gender it chooses from 1 to 3
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    GENDER = randint(1, 3)
    basic.showLeds(`
            . # . # .
                    . # . # .
                    . . . . .
                    . # . # .
                    # . # . #
        `, 250)
    basic.showLeds(`
            . # . # .
                    . # . # .
                    . . . . .
                    # . # . #
                    . # . # .
            `, 250)
})
/** Variables */
let GENDER = 0
let rng = 0
GENDER = randint(1, 3)
rng = randint(0, 10)
//  An active background so it isnt just a blank screen.
//  It is supposed to mimic a beating heart.
basic.forever(function on_forever() {
    basic.showIcon(IconNames.Heart, 125)
    basic.showIcon(IconNames.SmallHeart, 125)
    basic.showLeds(`
        . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
    `, 125)
    basic.showIcon(IconNames.SmallHeart, 125)
    basic.showIcon(IconNames.Heart, 100)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    basic.showLeds(`
            . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
        `)
    pause(1500)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    basic.showLeds(`
            . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
        `)
    pause(1500)
})
