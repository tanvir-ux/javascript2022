const add = (a, b = 0) => a + b

function add (a, b = 0) {
    return a + b
}

function add(a, b) {
    b = b === undefined ? 0 : b
}