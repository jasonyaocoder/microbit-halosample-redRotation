let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let Item = 0
basic.forever(function () {
    Pixel.setPixelColor(Item, neopixel.colors(NeoPixelColors.Red))
    Item += 1
    Item = Item % 24
    Pixel.show()
    Pixel.clear()
})
