ServerEvents.recipes(event => {

  event.recipes.botania.pure_daisy("minecraft:cobblestone", 'botania:metamorphic_fungal_cobblestone')
  event.recipes.botania.pure_daisy('minecraft:dirt', "minecraft:oak_leaves")


  event.recipes.botania.mana_infusion('kubejs:stone_pebble', '#forge:dusts/wood', 50)

  event.recipes.botania.petal_apothecary('botania:clayconia', [
    'botania:mana_string',
    '#botania:petals/gray',
    '#botania:petals/light_gray',
    '#botania:petals/light_gray',
    '#botania:petals/cyan'
  ])
})