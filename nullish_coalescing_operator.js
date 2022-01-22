x = x || 'some default'

add(null, 3)

function add(a, b) {
    a = a == null ? 0 : a
    b = b == null ? 0 : b
    return a + b
}

// new way of doing things in js
function add(a, b) {
    a = a ?? 0
    b = b ?? 0
    return a + b
}

