const event = require("events")
const eventEmitter = new event()

eventEmitter.on("start", () => {
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit("start")

console.log("Depois");
