MMEvents.createStructures(event => {
    event.create("mm:advanced_coke_oven")
        .controllerId("mm:advanced_coke_oven_controller")
        .name("大型焦炉")
        .layout(a => {
            a.layer([
                "561"
            ]).layer([
                "C11"
            ]).layer([
                "213"
            ]).key("1", {
                block: "tfmg:heavy_machinery_casing"
            }).key("2", {
                block: "mm:item_port_output"
            }).key("3", {
                block: "mm:kinetic_port_input"
            }).key("5", {
                block: "mm:fluid_port_output"
            }).key("6", {
                block: "mm:item_port_input"
            })
        })
})

MMEvents.createProcesses(event => {
    event.create("mm:coal_coke")
        .structureId("mm:advanced_coke_oven")
        .ticks(500)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 8
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 128
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke",
                count: 8
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:creosote",
                amount: 8000
            }
        })
})