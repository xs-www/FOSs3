ServerEvents.recipes(event => {

  let AllColor = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

  event.recipes.botania.pure_daisy("minecraft:cobblestone", 'botania:metamorphic_fungal_cobblestone')
  event.recipes.botania.pure_daisy('minecraft:dirt', "minecraft:oak_leaves")

  event.recipes.botania.mana_infusion('kubejs:stone_pebble', '#forge:dusts/wood', 50)
  event.recipes.botania.mana_infusion('kubejs:basic_randomite_ore', 'botania:metamorphic_fungal_cobblestone', 500)

  event.recipes.botania.mana_infusion('minecraft:andesite', 'minecraft:stone', 200, 'create:zinc_block')

  event.recipes.botania.mana_infusion('minecraft:gravel', 'minecraft:cobblestone', 100, 'kubejs:smashing_core')
  event.recipes.botania.mana_infusion('minecraft:sand', 'minecraft:gravel', 100, 'kubejs:smashing_core')

  event.recipes.botania.petal_apothecary('botania:clayconia', [
    'botania:mana_string',
    '#botania:petals/gray',
    '#botania:petals/light_gray',
    '#botania:petals/light_gray',
    '#botania:petals/cyan'
  ])

  AllColor.forEach( AC => {
    event.recipes.botania.mana_infusion('botania:' + AC + '_double_flower', 'botania:' + AC + '_petal', 200, 'botania:livingwood_log')
  })

  let mana_smashing = (input, output) => {
    event.recipes.botania.mana_infusion(output, input, 100, 'kubejs:smashing_core')
  }

  mana_smashing('minecraft:cobblestone', 'minecraft:gravel')
  mana_smashing('minecraft:gravel', 'minecraft:sand')
  mana_smashing('minecraft:raw_iron', 'create:crushed_raw_iron')

  let mana_smelting = (input, output) => {
    event.recipes.botania.mana_infusion(output, input, 50, 'kubejs:smelting_core')
  }

  mana_smelting('#forge:raw_materials/iron', '6x minecraft:iron_nugget')
  mana_smelting('#minecraft:logs', 'minecraft:charcoal')

})