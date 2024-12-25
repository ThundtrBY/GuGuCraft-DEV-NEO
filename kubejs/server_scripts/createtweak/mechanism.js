ServerEvents.recipes(event =>{

// Kinetic
event.shapeless(
  Item.of('kubejs:kinetic_mechanism',1),
  [
    'kubejs:iron_saw',
    '#minecraft:logs',
    'create:cogwheel',
    'create:andesite_alloy'
  ]
).damageIngredient('kubejs:iron_saw')

let kinetic = 'kubejs:incomplete_kinetic_mechanism'

event.recipes.create.sequenced_assembly([
  Item.of('kubejs:kinetic_mechanism')
], '#minecraft:wooden_slabs', [ 
      event.recipes.createDeploying(kinetic,[kinetic,'kubejs:iron_saw']),
      event.recipes.createDeploying(kinetic,[kinetic,'create:andesite_alloy']),
      event.recipes.createDeploying(kinetic,[kinetic,'create:andesite_alloy'])
]).transitionalItem(kinetic).loops(1)
    
// Sturdy
let sturdy = 'kubejs:incomplete_sturdy_mechanism'

event.recipes.create.sequenced_assembly([
  Item.of('kubejs:sturdy_mechanism')
], 'kubejs:kinetic_mechanism', [ 
      event.recipes.createDeploying(sturdy,[sturdy,'kubejs:platinum_assembly']),
      event.recipes.createCutting(sturdy,sturdy).processingTime(400),
      event.recipes.createDeploying(sturdy,[sturdy,'ad_astra:desh_plate']),
      event.recipes.createDeploying(sturdy,[sturdy,'#kubejs:tools_screwdriver'])
]).transitionalItem(sturdy).loops(1)
  
//Twilight
let twi = 'guguaddons:unfinished_twilight_mechanism'

event.recipes.create.sequenced_assembly([
  Item.of('guguaddons:twilight_mechanism')
], 'create:precision_mechanism', [ 
      event.recipes.createCutting(twi,twi),
      event.recipes.createDeploying(twi,[twi,'guguaddons:twilight_gem']),
      event.recipes.createDeploying(twi,[twi,'create:cogwheel']),
      event.recipes.createDeploying(twi,[twi,'create:electron_tube'])
]).transitionalItem(twi).loops(1)

//Sealed
let seal = 'kubejs:incomplete_sealed_mechanism'

event.recipes.create.sequenced_assembly([
  Item.of('kubejs:sealed_mechanism').withChance(100.0),
  Item.of('create:copper_sheet').withChance(8.0),
  Item.of('minecraft:slime_ball').withChance(7.5),
  Item.of('create:cogwheel').withChance(5.0),
  Item.of('create:framed_glass').withChance(5.0),
  Item.of('minecraft:glass').withChance(2.5),
  Item.of('create:copper_nugget').withChance(2.5),
  Item.of('create:shaft').withChance(2.5)
], 'kubejs:cured_rubber', [ 
      event.recipes.createDeploying(seal,[seal,'create:cogwheel']),
      event.recipes.createDeploying(seal,[seal,'minecraft:dried_kelp']),
      event.recipes.createDeploying(seal,[seal,'#forge:plates/copper']),
      event.recipes.createDeploying(seal,[seal,'#forge:glass/colorless'])
]).transitionalItem(seal).loops(4)

//Calculation
let cal = 'kubejs:incomplete_calculation_mechanism'

event.recipes.create.sequenced_assembly([
  Item.of('kubejs:calculation_mechanism')
], 'create:precision_mechanism', [ 
      event.recipes.createDeploying(cal,[cal,'ae2:printed_silicon']),
      event.recipes.createDeploying(cal,[cal,'ae2:printed_silicon']),
      event.recipes.createDeploying(cal,[cal,'#kubejs:tools_screwdriver'])
]).transitionalItem(cal).loops(1)

})