kaboom({
    width: 1285,
    height: 720,

})

setBackground(Color.fromHex('#36A6E0'))
loadSprite('player', 'Images/mario64.png')
const mario = add([
    sprite('player'),
    pos(80, 100),
    scale(1.0),
    area(),
    body(),
])


setGravity(1600)

// jump function
onKeyPress("Space", () => {
    Mario.jump()
})
