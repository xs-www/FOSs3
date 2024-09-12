ServerEvents.recipes(event => {

    event.shaped('kubejs:mycelial_incubators', ['ADA','ABA','C C'], {
        'A':'#minecraft:logs',
        'B':'#minecraft:wooden_slabs',
        'C':'#forge:rods/wooden',
        'D':'woodenbucket:wooden_bucket'
    })
    //Machine recipe : 
    event.recipes.custommachinery.custom_machine("kubejs:mycelial_incubators", 200)
        .requireBlock('thermal:sawdust_block', true, 0, -1, 0, 0, -1, 0)
        .requireItem('9x botania:mycelium_seeds')
        .destroyAndPlaceBlockOnEnd('botania:metamorphic_fungal_cobblestone', 0, -1, 0, 0, -1, 0)
        .produceFluidPerTick(Fluid.of('minecraft:water', 1))
        .runCommandEachTick("/particle minecraft:mycelium ~ ~-0.5 ~ 0.5 -0.4 0.5 1 10")

    event.recipes.custommachinery.custom_machine("kubejs:mycelial_incubators", 20)
        .requireBlock('minecraft:cobblestone', true, 0, -1, 0, 0, -1, 0)
        .requireItem('botania:mycelium_seeds')
        .destroyAndPlaceBlockOnEnd('botania:metamorphic_fungal_cobblestone', 0, -1, 0, 0, -1, 0)
        .produceFluidPerTick(Fluid.of('minecraft:water', 1))
        .runCommandEachTick("/particle minecraft:mycelium ~ ~-0.5 ~ 0.5 -0.4 0.5 1 10")
  })