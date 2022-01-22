export default function add(a, b) {
    return a + b
}

export const foo = 'bar'

console.assert(add(4 + 3) == 7)

export function subtract(a, b) {
    return a - b
}

export const now = new Date()