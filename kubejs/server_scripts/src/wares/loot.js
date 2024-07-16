let rewards = [
    'minecraft:dirt',
    'minecraft:iron_ingot',
    'minecraft:gold_ingot',
    'minecraft:diamond'
]
ItemEvents.rightClicked('kubejs:common_lootbag', e =>{
    let index = Math.floor(Math.random() * rewards.length)
    if (index >= rewards.length)
        index = rewards.length - 1
    e.player.give(rewards[index])
    e.item.count--
})