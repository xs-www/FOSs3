
StartupEvents.registry('block', event => {
	//Syntax : event.create("namespace:block_id", "custommachinery").machine("namespace:machine_id)
	event.create("kubejs:mycelial_incubators", "custommachinery")

})