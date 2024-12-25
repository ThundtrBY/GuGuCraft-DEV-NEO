ServerEvents.recipes(event => {
	Ingredient.of('/create_dd:infa*./').itemIds.forEach(i =>{
        event.remove({output:`${i}`})
    })
})