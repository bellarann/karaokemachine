enum RadioMessage {
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    music.playMelody("E B E B E B E B ", 307)
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
radio.setGroup(2)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendMessage(RadioMessage.message1)
    }
})
