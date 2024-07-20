let rewards = [
    'kubejs:random_delivery_agreement'
]
ItemEvents.rightClicked('kubejs:lootbag_create_andesite', e =>{
    let index = Math.floor(Math.random() * rewards.length)
    let randomcount = Math.floor(Math.random() * 16)
    if (index >= rewards.length)
        index = rewards.length - 1
    e.player.give(Item.of(rewards[index], randomcount))
    e.item.count--
})