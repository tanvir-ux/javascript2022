const message = bottle.fullOfSoda
  ? 'The bottle has soda!'
  : 'The bottle may not have sofa :-('

// is same as
let message
if (bottle.fullOfSoda) {
    message = 'The bottle has soda!'
} else {
    message = 'The bottle may not have soda :-('
}