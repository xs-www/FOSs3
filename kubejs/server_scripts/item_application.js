ServerEvents.recipes(event => {
      
      event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'minecraft:dirt'
          },
          {
            "item": 'minecraft:bone_meal'
          }
        ],
        "results": [
          {
            "item": 'minecraft:grass_block'
          }
        ]
      })

  })