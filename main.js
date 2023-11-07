kaboom()

setBackground(Color.fromHex('#36A6E0'))
loadSprite('player', 'Images/mario64.png')
const mario = add([
    sprite('player'),
    pos(80, 100),
    scale(0.2),
    area(),
    body(),
])


setGravity(1600)

// jump function
onKeyPress("Space", () => {
    mario.jump()
})
