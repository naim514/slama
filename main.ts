input.onButtonPressed(Button.A, function () {
    naim_ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "77BNXKRFT8RR2TID",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showString(naim_ESP8266ThingSpeak.HTTPGet("https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=2", 80))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (naim_ESP8266ThingSpeak.GETFromJson(naim_ESP8266ThingSpeak.HTTPGet("https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=2", 80), "feeds")))
})
basic.showIcon(IconNames.Heart)
naim_ESP8266ThingSpeak.connectWifi(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200,
"naim's Galaxy A12",
"ubuy9109"
)
