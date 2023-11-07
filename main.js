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
// Add Platform
add([
    rect(width(), 48),
    pos(0, height()- 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(255,255,255),
])

setGravity(1600)

// jump function
onKeyPress("space", () => {
    if (mario.isGrounded()){
    mario.jump()
    }

})
