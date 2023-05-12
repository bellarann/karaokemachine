enum RadioMessage {
    message1 = 49434,
    alarm = 2438
}
radio.setGroup(8148)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendNumber(0)
    }
})
