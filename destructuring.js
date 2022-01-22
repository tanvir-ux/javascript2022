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

// Destructuring Assignment

function nestedArrayAndObject() {
    const info = {
        title: 'Once Upon a Time',
        protagonist: {
            name: 'Emma Watson',
            enemies: [
                {name: 'Regina Mills', title: 'Evil Queen'},
                {name: 'Cora Mills', title: 'Queen of Hearts'},
                {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
                {name: 'Zelena', title: 'The Wicked Witch'}
            ],
        },
    }
    const title = info.title
    const protagonistName = info.protagonist.name
    const enemy = info.protagonist.enemies[3]
    const enemyTitle = enemy.title
    const enemyName = enemy.name
    return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}