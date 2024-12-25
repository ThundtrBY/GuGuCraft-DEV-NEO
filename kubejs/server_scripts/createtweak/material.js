ServerEvents.recipes(event =>{
  event.remove({id: 'tfmg:industrial_blasting/steel'})
  event.remove({output: 'create:belt_connector'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": [
      {
        "item": "minecraft:glass"
      }
    ],
    "loops": 100,
    "results": [
      {
        "item": "kubejs:reinforced_glass"
      }
    ],
    "sequence": [
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_reinforced_glass"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_reinforced_glass"
          }
        ]
      }
    ],
    "transitionalItem": {
          "item": "kubejs:incomplete_reinforced_glass"
        }
  })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:paper"
        },
        "loops": 5,
        "results": [
          {
            "item": "kubejs:platinum_assembly"
          }
        ],
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              },
              {
                "item": "kubejs:platinum_ingot"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              },
              {
                "item": "kubejs:platinum_ingot"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ],
            "results": [
              {
                "item": "kubejs:incomplete_assembly"
              }
            ]
          }
        ],
        "transitionalItem": {
          "item": "kubejs:incomplete_assembly"
        }
  })
  event.custom({
    "type": "tfmg:industrial_blasting",
    "ingredients": [
      {
        "count": 1,
        "item": "tfmg:blasting_mixture"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "fluid": "tfmg:molten_steel",
        "amount": 144
      },
      {
        "fluid": "tfmg:molten_slag",
        "amount": 72
      }
  
    ]
  })
  event.stonecutting('8x kubejs:ingot_mold','create:andesite_casing')
  event.recipes.create.filling('kubejs:molten_steel_ingot_mold',[Fluid.of("tfmg:molten_steel",144),'kubejs:ingot_mold'])
  event.recipes.create.splashing(['ad_astra:steel_ingot','kubejs:ingot_mold'],'kubejs:molten_steel_ingot_mold')
  BlockCrafting.addMultiblockStructure(MultiblockStructureFileBuilder.create("kubejs:universal_catalyst")
    .file("structures/ucatalyst.nbt")
    .center(Blocks.AMETHYST_BLOCK)
    .craftingItem("create:wrench")
    .resultItem("kubejs:universal_catalyst")
    .build()
  )
  event.recipes.create.compacting([Fluid.of('kubejs:resin',18),'farmersdelight:tree_bark'],'minecraft:oak_log')
  event.recipes.create.compacting('kubejs:rubber',Fluid.of('kubejs:resin',144)).heated()
  event.smelting('kubejs:cured_rubber','kubejs:rubber')
  event.shaped(
       'create:belt_connector',
        [
          '   ',
          'AAA',
          'AAA'
        ],
        {
          A: 'kubejs:cured_rubber',
        }
    )
  event.recipes.create.milling('4x kubejs:phantom_membrane_fragment','minecraft:phantom_membrane')
  let transtrack = 'railways:track_incomplete_phantom'
  event.recipes.create.sequenced_assembly([
		Item.of('railways:track_phantom').withCount(64)
	], 'kubejs:phantom_membrane_fragment', [
    event.recipes.createDeploying(transtrack,[transtrack,'minecraft:iron_ingot']),
    event.recipes.createFilling(transtrack,[transtrack,Fluid.of('kubejs:waste',576)]),
    event.recipes.createDeploying(transtrack,[transtrack,'minecraft:iron_ingot']),
    event.recipes.createPressing(transtrack,transtrack)
  ]).transitionalItem(transtrack).loops(1)
})