ServerEvents.recipes(event => {

    event.remove({output:'woodenshears:wooden_shears'})
    event.remove({output:'woodenbucket:wooden_bucket'})
    event.remove({output:'portablecraftingtable:portable_crafting_table'})
    event.remove({id:'botania:fertilizer_dye'})
    event.remove({id:'botania:petal_apothecary/clayconia'})
    event.remove({id:'botania:mana_infusion/stone_to_andesite'})
    event.remove({id:'botania:mana_infusion/granite_to_andesite'})
})
