function makeCalculation({x, y: d, z = 4}) {
    return Math.floor((x + d + z) / 3)
}
console.log(makeCalculation({x: 4, y: 200}))

function makeCalculation2(obj) {
    const {x, y: d, z = 4} = obj
    return Math.floor((x + d + z) / 3)
}
console.log(makeCalculation2({x: 4, y: 200}))

function makeCalculation3(obj) {
    const x = obj.x
    const d = obj.y
    const z = obj.z === undefined ? 4 : obj.z
    return Math.floor((x + d + z) / 3)
}
console.log(makeCalculation3({x:4, y: 200}))