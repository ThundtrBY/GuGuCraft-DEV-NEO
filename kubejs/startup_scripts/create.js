StartupEvents.postInit((event) => {
  let $MysteriousItemConversionCategory = Java.loadClass(
    "com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory"
  )
  let $ConversionRecipe = Java.loadClass(
    "com.simibubi.create.compat.jei.ConversionRecipe"
  )

  function myst(input, output) {
    output.forEach((element) => {
      $MysteriousItemConversionCategory.RECIPES.add(
        $ConversionRecipe.create(input, element)
      )
    })
  }
  
  myst("create:chromatic_compound", ["create:refined_radiance"]);
})