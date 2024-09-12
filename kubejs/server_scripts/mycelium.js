BlockEvents.rightClicked(event => {
    let block = event.block
    let player = event.player
    let hand = event.hand
    let heldItem = player.getHeldItem(hand)

    if (block.id === 'minecraft:composter') {
        let lev = block.properties.level
        if (lev > 7) {
            block.popItem('4x botania:mycelium_seeds')
            block.popItem('7x minecraft:bone_meal')
            block.set(block.id)
        }
        else if ((lev > 0) && (heldItem.isEmpty())) {
            block.popItem(String(Math.trunc(lev / 2)) + 'x botania:mycelium_seeds')
            block.popItem(String(lev - 1) + 'x minecraft:bone_meal')
            block.set(block.id)
        }

    }
})