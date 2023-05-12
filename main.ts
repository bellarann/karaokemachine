enum RadioMessage {
    message1 = 49434,
    alarm = 2438
}
radio.onReceivedMessage(RadioMessage.alarm, function () {
    music.playMelody("E B E B E B E B ", 376)
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
radio.setGroup(8148)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendMessage(RadioMessage.alarm)
    }
})
