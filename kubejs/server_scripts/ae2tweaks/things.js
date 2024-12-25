ServerEvents.recipes(e => {
    let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
    let KJ = (id, x) => MOD("kubejs", id, x)
    let AE2 = (id, x) => MOD("ae2", id, x)
    let CR = (id, x) => MOD("create", id, x)
    let MC = (id, x) => MOD("minecraft", id, x)
    
    let transmatrix = 'kubejs:incomplete_matrix'
    e.remove({id:'create:splashing/sand'})
    e.remove({output:'ae2:matter_cannon'})
    e.remove({output:'ae2:sky_dust'})
    e.remove({output:'ae2:silicon'})
    e.stonecutting('kubejs:cast', 'minecraft:copper_ingot')
    let cast = ['kubejs:plus_cast', 'kubejs:minus_cast', 'kubejs:multiply_cast', 'kubejs:divide_cast', 'kubejs:three_cast', 'kubejs:eight_cast']
    let cast_flow = ['kubejs:plus_cast_flow', 'kubejs:minus_cast_flow', 'kubejs:multiply_cast_flow', 'kubejs:divide_cast_flow', 'kubejs:three_cast_flow', 'kubejs:eight_cast_flow']
    cast.forEach(i => {
        e.stonecutting(i, 'kubejs:cast')
    })
    e.recipes.create.emptying(Fluid.of('kubejs:sky_stone',72),'ae2:sky_dust')
    e.recipes.create.mixing(Fluid.of('kubejs:molten_redstone',576),[Fluid.of('kubejs:sky_stone',144),'minecraft:redstone','ae2:charged_certus_quartz_crystal'])
    e.recipes.create.emptying(Fluid.of('kubejs:matrix',72),'kubejs:calculation_mechanism')
    e.recipes.create.filling('kubejs:plus_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:plus_cast'])
    e.recipes.create.filling('kubejs:minus_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:minus_cast'])
    e.recipes.create.filling('kubejs:multiply_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:multiply_cast'])
    e.recipes.create.filling('kubejs:divide_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:divide_cast'])
    e.recipes.create.filling('kubejs:three_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:three_cast'])
    e.recipes.create.filling('kubejs:eight_cast_flow',[Fluid.of('kubejs:matrix',144),'kubejs:eight_cast'])
    e.recipes.create.splashing(['kubejs:plus','kubejs:plus_cast'],'kubejs:plus_cast_flow')
    e.recipes.create.splashing(['kubejs:minus','kubejs:minus_cast'],'kubejs:minus_cast_flow')
    e.recipes.create.splashing(['kubejs:multiply','kubejs:multiply_cast'],'kubejs:multiply_cast_flow')
    e.recipes.create.splashing(['kubejs:divide','kubejs:divide_cast'],'kubejs:divide_cast_flow')
    e.recipes.create.splashing(['kubejs:3','kubejs:three_cast'],'kubejs:three_cast_flow')
    e.recipes.create.splashing(['kubejs:8','kubejs:eight_cast'],'kubejs:eight_cast_flow')
    e.recipes.create.crushing(['ae2:sky_stone_block', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').processingTime(200)
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:incomplete_matrix')
	], 'tfmg:plastic_sheet', [ 
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_0',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_1',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_2',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_3',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_4',144)])
	]).transitionalItem(transmatrix).loops(3)
    e.recipes.create.sequenced_assembly([
		Item.of('kubejs:computation_matrix')
	], 'kubejs:incomplete_matrix', [ 
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_5',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_6',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_7',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_8',144)]),
        e.recipes.createFilling(transmatrix, [transmatrix, Fluid.of('kubejs:number_9',144)])
	]).transitionalItem(transmatrix).loops(3)
    for (var i = 0; i < 10; i++)
      e.recipes.create.emptying(Fluid.of(`kubejs:number_${i}`,144),`kubejs:${i}`)
    e.recipes.create.splashing([Item.of('kubejs:sand_ball').withChance(0.5),Item.of('minecraft:clay_ball').withChance(0.25)],'minecraft:sand')
    e.recipes.create.emptying([Fluid.of('kubejs:fine_sand',500),'kubejs:rough_sand'],'kubejs:sand_ball')
    e.custom({
      "type": "ae2:transform",
      "circumstance": {
        "type": "explosion"
      },
      "ingredients": [
        {
          "item": "kubejs:rough_sand"
        }
      ],
      "result": {
        "count": 1,
        "item": "kubejs:purified_sand"
      }
    })
    e.recipes.create.compacting('kubejs:silicon_compound',['kubejs:purified_sand','kubejs:coke_chunk',Fluid.of('kubejs:fine_sand',500)])
    e.custom({
      "type": "lychee:block_crushing",
      "item_in": [
          {
              "item": "kubejs:silicon_compound"
          }
      ],
      "post": [
          {
              "type": "drop_item",
              "item": "ae2:silicon",
              "count": 1
          }
      ]
  })
    e.recipes.create.crushing([Item.of(AE2("singularity")).withChance(1)], CR('crushing_wheel')).processingTime(250)
    let dyes = [MC('orange_dye'), MC('magenta_dye'), MC('light_blue_dye'), MC('yellow_dye'), MC('lime_dye'), MC('pink_dye'), MC('cyan_dye'), MC('purple_dye'), MC('blue_dye'), MC('brown_dye'), MC('green_dye'), MC('red_dye')]
    e.recipes.create.compacting('1x ' + KJ("dye_entangled_singularity"), [dyes, Item.of(AE2('quantum_entangled_singularity'), 1)])
    e.recipes.create.crushing([
		Item.of(AE2("red_paint_ball"), 1).withChance(.90),
		Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
		Item.of(AE2("green_paint_ball"), 1).withChance(.70),
		Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
		Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)],
		KJ('dye_entangled_singularity')).processingTime(50)
    let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	for (let index = 0; index < colors.length; index++) {
		var element = colors[index];
		if (index == colors.length - 1)
			continue;
		e.recipes.create.emptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of('kubejs:waste', 36)], AE2(element + '_paint_ball'))
	}
	e.recipes.create.mechanical_crafting(CR('chromatic_compound'), [
		'AA',
		'AA'
	], {
		A: AE2('magenta_paint_ball')
	})
	e.recipes.create.pressing('kubejs:radiant_sheet','create:refined_radiance')
	e.shaped(
        'kubejs:radiant_coil',
        [
          '  A',
          ' B ',
          'A  '
        ],
        {
          A: 'create:iron_sheet',
          B: 'kubejs:radiant_sheet'
        }
    )
})