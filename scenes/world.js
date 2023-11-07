function setWorld(worldState){
    function makeTile(type) {
        return[
            sprite('tile'),
            {type}
        ]
    }

    const player = add([sprite('player'), area(), body(), pos(0, 0), scale(1), 
    {
        currentSprite: 'player',
        speed: 300,
        isInDialogue: false
    }])

    let tick = 0
    onUpdate(()=>{
        camPos(player.pos)
        tick++
        if ((isKeyDown('down')|| isKeyDown('up'))
            && tick % 20 === 0
            && !player.isInDialogue) {
            player.flipX = !player.flipX
        }
    })
}