input.onGesture(Gesture.Shake, function () {
    sætning = "" + sætning + " "
})
input.onButtonPressed(Button.A, function () {
    basic.showString(sætning)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(sætning)
    sætning = ""
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.pause(100)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    sætning = "" + sætning + bogstav
})
let bogstav = ""
let sætning = ""
radio.setTransmitPower(7)
radio.setGroup(57)
let værdi = 0
let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 20) {
        værdi += 1
        if (værdi == 26) {
            værdi = 0
        }
        bogstav = alfabet.charAt(værdi)
        basic.showString(bogstav)
        basic.pause(250)
    }
    if (input.rotation(Rotation.Roll) < -20) {
        værdi += -1
        if (værdi == -1) {
            værdi = 25
        }
        bogstav = alfabet.charAt(værdi)
        basic.showString(bogstav)
        basic.pause(250)
    }
})
