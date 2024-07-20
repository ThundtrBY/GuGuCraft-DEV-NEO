MMEvents.registerControllers(event => {
    event.create("advanced_coke_oven_controller")
        .name("大型焦炉控制器")
        .type("mm:machine");
});

MMEvents.registerPorts(event => {
    event.create("kinetic_port")
        .name("动力输入口")
        .controllerId("mm:advanced_coke_oven_controller")
        .config("mm:create/kinetic", c => {
            c.stress(4)
    })

    event.create("item_port")
        .name("物品接口")
        .controllerId("mm:advanced_coke_oven_controller")
        .config("mm:item", c => {
            c.rows(1)
            c.columns(1)
    })

    event.create("fluid_port")
        .name("流体输出口")
        .controllerId("mm:advanced_coke_oven_controller")
        .config("mm:fluid", c => {
            c.rows(1)
            c.columns(1)
            c.slotCapacity(10000)
    })
})