
ServerEvents.recipes(event => {
  event.remove({ mod: 'ad_astra', type: 'minecraft:crafting_shaped'})
  event.remove({ mod: 'ad_astra', type: 'minecraft:crafting_shapeless'})
  event.remove({ type: 'ad_astra:nasa_workbench'})
  event.remove({ type: 'ad_astra:compressing'})
  event.remove({ type: 'ad_astra:fuel_conversion'})
  event.remove({output: 'ad_astra:steel_ingot'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:diamond"
    },
    "loops": 1,
    "results": [
      {
        "chance": 100.0,
        "item": "guguaddons:twilight_gem"
      },
    ],
    "sequence": [
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ],
        "processingTime": 20,
        "results": [
          {
        "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          },
          {
            "amount": 1000,
            "fluid": "guguaddons:portal_matter",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          },
          {
            "item": "create:golden_sheet"
          }
        ],
        "results": [
          {
            "item": "guguaddons:unfinished_twilight_mechanism"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "guguaddons:unfinished_twilight_mechanism"
    }
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "ae2:ender_dust"
      },
      {
        "amount": 1000,
        "fluid": "minecraft:water"
      }
    ],
    "results": [
      {
        "amount": 500,
        "fluid": "guguaddons:portal_matter"
      }
    ]
  })
  event.recipes.create.deploying(['kubejs:green_fern_leaf','kubejs:blue_fern_leaf','kubejs:purple_fern_leaf'],['twilightforest:fiddlehead','#farmersdelight:tools/knives']).keepHeldItem()
  event.recipes.create.milling('2x kubejs:green_fern_paste','kubejs:green_fern_leaf')
  event.recipes.create.milling('2x kubejs:blue_fern_paste','kubejs:blue_fern_leaf')
  event.recipes.create.milling('2x kubejs:purple_fern_paste','kubejs:purple_fern_leaf')
  event.recipes.create.haunting('kubejs:green_fern_leaf','kubejs:green_fern_paste')
  event.recipes.create.haunting('kubejs:blue_fern_leaf','kubejs:blue_fern_paste')
  event.recipes.create.haunting('kubejs:purple_fern_leaf','kubejs:purple_fern_paste')
  event.campfireCooking('minecraft:gunpowder','kubejs:green_fern_paste',0,300)
  event.campfireCooking('minecraft:bone_meal','kubejs:blue_fern_paste',0,300)
  event.campfireCooking('ae2:ender_dust','kubejs:purple_fern_paste',0,300)
})