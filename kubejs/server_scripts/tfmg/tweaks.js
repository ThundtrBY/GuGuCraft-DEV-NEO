ServerEvents.recipes(e => {
    let transcoke = 'kubejs:incomplete_coke_chunk'
    let removal = [
        'tfmg:low_grade_fuel_engine',
        'tfmg:compact_engine',
        'tfmg:large_radial_engine',
        'tfmg:radial_engine',
        'tfmg:diesel_engine_expansion',
        'tfmg:diesel_engine',
        'tfmg:turbine_engine_back',
        'tfmg:turbine_engine',
        'tfmg:lpg_engine_back',
        'tfmg:lpg_engine',
        'tfmg:gasoline_engine_back',
        'tfmg:gasoline_engine',
        'tfmg:coal_coke',
        'tfmg:casting_basin',
        'tfmg:casting_spout',
        'tfmg:steel_block',
        'tfmg:heavy_plate'
    ]
    removal.forEach(i => {
        e.remove({output:`${i}`})
    })
    e.remove({ id: 'tfmg:casting/steel' })
    e.remove({ id: 'tfmg:compacting/plastic_molding' })
    e.custom({
        "type":"lychee:item_inside",
        "item_in": { 
            "item": "minecraft:ice" 
        },
        "block_in": { 
            "blocks": ["tfmg:liquid_plastic"] 
        },
        "post":  [{  
            "type": "drop_item",
            "item": "tfmg:plastic_sheet"
        },
        {
            "type": "place",
            "block": "minecraft:air"
        }
      ]
    })
    e.custom({
        "type": "tfmg:coking",
        "ingredients": [
          {
            "tag": "minecraft:coals"
          }
        ],
        "processingTime": 1000,
        "results": [
          {
            "count": 1,
            "item": "tfmg:coal_coke"
          }
        ,
          {
            "fluid": "tfmg:creosote",
            "amount": 1
          }
      
        ]
      })
      e.custom({
        "type": "tfmg:coking",
        "ingredients": [
          {
            "tag": "kubejs:coke_material_block"
          }
        ],
        "processingTime": 9000,
        "results": [
          {
            "count": 1,
            "item": "tfmg:coal_coke_block"
          }
        ,
          {
            "fluid": "tfmg:creosote",
            "amount": 9
          }
      
        ]
      })
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:coke_chunk')
	], 'tfmg:coal_coke', [ 
        e.recipes.createFilling(transcoke, [transcoke, Fluid.water(100)]),
        e.recipes.createCutting(transcoke,transcoke)
	]).transitionalItem(transcoke).loops(1)
    e.recipes.create.compacting('tfmg:steel_block','9x #forge:ingots/steel')
    let transheavyplate = 'tfmg:unprocessed_heavy_plate'
    e.recipes.create.sequenced_assembly([
      Item.of('tfmg:heavy_plate').withCount(1)
    ], '#forge:plates/steel', [ 
      e.recipes.createDeploying(transheavyplate, [transheavyplate, '#forge:ingots/steel']),
          e.recipes.createPressing(transheavyplate, transheavyplate),
              e.recipes.createPressing(transheavyplate, transheavyplate)
    ]).transitionalItem(transheavyplate).loops(1)
    let transsteelmech = 'tfmg:unfinished_steel_mechanism'
    e.recipes.create.sequenced_assembly([
      Item.of('tfmg:steel_mechanism').withChance(83.0),
      Item.of('tfmg:aluminum_ingot').withChance(7.0),
      Item.of('tfmg:screw').withChance(6.0),
      Item.of('tfmg:heavy_plate').withChance(4.0)
    ], 'tfmg:heavy_plate', [ 
      e.recipes.createDeploying(transsteelmech, [transsteelmech, 'tfmg:screw']),
          e.recipes.createDeploying(transsteelmech, [transsteelmech, '#forge:ingots/aluminum']),
              e.recipes.createDeploying(transsteelmech, [transsteelmech, '#forge:plates/steel']),
                  e.recipes.createDeploying(transsteelmech, [transsteelmech, '#kubejs:tools_screwdriver']),
    ]).transitionalItem(transsteelmech).loops(3)
})