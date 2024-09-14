ServerEvents.blockLootTables(event => {
	event.addBlock('kubejs:basic_randomite_ore', table => {
		table.addPool(pool => {
			pool.rolls = 10
			pool.addItem('minecraft:raw_copper', 1)
			pool.addItem('minecraft:raw_iron', 1)
			pool.addItem('minecraft:raw_gold', 1)
			pool.addItem('create:raw_zinc', 1)
		})
	})
})