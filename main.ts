let enemy: Sprite = null
let player = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
controller.moveSprite(player)
scene.cameraFollowSprite(player)
tiles.setTilemap(tilemap`level`)
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    enemy.x = 150
    enemy.vx = -20
})
