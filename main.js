kaboom({
    width: 1285,
    height: 720,
    scale: 1.0
})

setBackground(Color.fromHex('#36A6E0'))
loadSprite('player', 'Image/mario64.png')

add([
    sprite('player'),
    pos(0, 0),
])