# Based off the information that was given.
# If Button A pressed. Referenced from previous classes/Microbit

def on_button_pressed_a():
    if GENDER == 1:
        if rng >= 7:
            basic.show_string(" YES KING")
        elif rng == 6:
           basic.show_string(" RETHINK THAT!")
        elif rng == 5:
           basic.show_string(" Maybe...")
        elif rng <= 4:
            basic.show_string(" NAH KING")
        else:
            basic.clear_screen()
    if GENDER == 2:
        if rng >= 7:
            basic.show_string(" YAS QUEEN!", 100)
        elif rng == 6:
           basic.show_string(" Respin Queen",100)
        elif rng == 5:
           basic.show_string(" Maybe", 100)
        elif rng <= 4:
            basic.show_string(" NOT WORTH IT QUEEN!", 100)
        else:
           basic.clear_screen()
    if GENDER == 3:
        if rng >= 7:
            basic.show_string(" YES LEADER!!")
        elif rng == 6:
           basic.show_string(" Retry LEADER")
        elif rng == 5:
           basic.show_string(" Maybe")
        elif rng <= 4: 
            basic.show_string(" YOU DESERVE BETTER LEADER")
        else:
           basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

# If button A and B pressed, it points up at the user and says "You are Beautiful"

def on_button_pressed_ab():
    global rng
    rng = randint(0, 10)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# If button B is pressed, based off the info given from Gender during the shake, it will show the gender.
# 1 = Male
# 2 = Female
# 3 = Non Binary
# WE enjoy INCLUSION here.

def on_button_pressed_b():
    if GENDER == 1:
        basic.show_leds("""
            . . # # #
                        . . . # #
                        . . # . .
                        # # . . .
                        # # . . .
        """)
        basic.pause(1000)
    elif GENDER == 2:
        basic.show_leds("""
            . # # # .
                        . # # # .
                        . . # . .
                        . # # # .
                        . . # . .
        """)
        basic.pause(1000)
    else:
        basic.show_string("Non Binary")
input.on_button_pressed(Button.B, on_button_pressed_b)

# If you shake, For rng it chooses from 0 to 10
# if you shake, for Gender it chooses from 1 to 3

def on_gesture_shake():
    global GENDER
    GENDER = randint(1, 3)
    basic.show_leds("""
            . # . # .
                    . # . # .
                    . . . . .
                    . # . # .
                    # . # . #
        """, 250)
    basic.show_leds("""
            . # . # .
                    . # . # .
                    . . . . .
                    # . # . #
                    . # . # .
            """, 250)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

"""

Variables

"""
GENDER = 0
rng = 0
GENDER = randint(1, 3)
rng = randint(0, 10)
# An active background so it isnt just a blank screen.
# It is supposed to mimic a beating heart.

def on_forever():
    basic.show_icon(IconNames.HEART,125)
    basic.show_icon(IconNames.SMALL_HEART,125)
    basic.show_leds("""
        . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
    """, 125)
    basic.show_icon(IconNames.SMALL_HEART,125)
    basic.show_icon(IconNames.HEART,100)
basic.forever(on_forever)

def on_gesture_tilt_left():
    basic.show_leds("""
            . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
        """)
    pause(1500)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    basic.show_leds("""
            . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
        """)
    pause(1500)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)
