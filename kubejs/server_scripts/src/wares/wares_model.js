function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function Wares(id) {
    this.paymentItems = []
    this.ordered = false
    this.id = id
    this.requestedItems = []
    this.experience = 0
}

Wares.prototype = {
    addPaymentItems: function (item) {
        this.paymentItems.push(item)
        return this
    },
    addRequestedItems: function (item) {
        this.requestedItems.push(item)
        return this
    },
    setPaymentItems: function (paymentItems) {
        this.paymentItems = paymentItems
        return this
    },
    setRequestedItems: function (requestedItems) {
        this.requestedItems = requestedItems
        return this
    },
    setBuyerAddress: function (buyerAddress, color) {
        this.buyerAddress = buildMessageJsonString(buyerAddress, color);
        return this
    },
    setOrdered: function (ordered) {
        this.ordered = ordered
        return this
    },
    setExperience: function (experience) {
        this.experience = experience
        return this
    },
    setTitle: function (title, color) {
        this.title = buildMessageJsonString(title, color)
        return this
    },
    setMessage: function (message, color) {
        this.message = buildMessageJsonString(message, color)
        return this
    },
    setBuyerName: function (buyerName, color) {
        this.buyerName = buildMessageJsonString(buyerName, color)
        return this
    },
    /**
     * 
     * @returns {Internal.ItemStack}
     */
    build: function () {
        return Item.of('wares:delivery_agreement', this)
    },
}

function buildMessageJsonString(text, color) {
    return `{ "color": "${color}", "text": "${text}" }`
}

function SimpleWares(requestedItems, paymentItems, ordered) {
    this.paymentItems = paymentItems
    this.requestedItems = requestedItems
    this.ordered = ordered
}

global.getRandomWare = () => {
    let itemstack = getRandomOreWares()
    let random = Math.random()
    switch (true) {
        case random < 0.03:
            itemstack = getRandomEggWares()
            break
        case random < 0.06:
            itemstack = getRandomOrganWares()
            break
        case random < 0.12:
            itemstack = getRandomChallengeWares()
            break
        case random < 0.18:
            itemstack = getRandomSpecialWares()
            break
        case random < 0.3:
            itemstack = getRandomPotionWares()
            break
        default:
            itemstack = getRandomOreWares()
    }
    return itemstack
}

const PotionWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)
]

const ChallengeWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)

]



const EggWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)
]

const SpecialWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)

]

const OrganWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)
]

const OreWares = [
    new SimpleWares([Item.of('numismatics:spur').withCount(1)], [Item.of('minecraft:dirt').withCount(1)], 8)
]

function getRandomPotionWares() {
    let task = randomGet(PotionWares)
    return new Wares('potion').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('女巫酿造师', '#33333').setMessage('我了解到你似乎有些 **特殊的** 需求。不如看看这瓶女巫精酿是否能够满足你的一时之需？', '#33333').setOrdered(task.ordered).build()
}
function getRandomChallengeWares() {
    let task = randomGet(ChallengeWares)
    return new Wares('challenge').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('传说中的物品', '#e6493e').setMessage('我们在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，可以将其低价转卖给你。', '#33333').setOrdered(task.ordered).build()
}
function getRandomEggWares() {
    let task = randomGet(EggWares)
    return new Wares('egg').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('宠物商人', '#33333').setMessage('咳，你也许在荒野上遇到过它吧。\n我们把它装在怪物蛋里，这对你来说很方便吧？', '#33333').setOrdered(task.ordered).build()
}
function getRandomSpecialWares() {
    let task = randomGet(SpecialWares)
    return new Wares('special').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('遗物商人', '#33333').setMessage('我们的探险队从遗迹中搜寻到了一些有趣的物品。\n我们只需要一个合理的价格。剩下的，你自己决定。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOrganWares() {
    let task = randomGet(OrganWares)
    return new Wares('organ').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('器官商人', '#d15492').setMessage('这是一些. . .肉制品。\n我们保存的相当完好，保证随取随用。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOreWares() {
    let task = randomGet(OreWares)
    return new Wares('ore').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('矿石商人', '#33333').setMessage('你好，我这里有些矿物。\n或许这对你有用。', '#33333').setOrdered(task.ordered).build()
}

