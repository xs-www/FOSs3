ServerEvents.recipes(event => {

    let Woodcutting = (input, output, countO) => {

        if (input.startsWith('#')) {
            event.custom({
                "type":"corail_woodcutter:woodcutting",
                "ingredient":{
                    "tag": input.slice(1),
                },
                "result": output,
                "count": countO
            })
        }
        else {
            event.custom({
                "type":"corail_woodcutter:woodcutting",
                "ingredient":{
                    "item": input,
                },
                "result": output,
                "count": countO
            })
        }

    }
    
    Woodcutting('#minecraft:wooden_slabs', 'thermal:sawdust', 2)
    Woodcutting('#minecraft:logs', 'woodenshears:wooden_shears', 1)
    Woodcutting('#minecraft:logs', 'woodenbucket:wooden_bucket', 1)
})
