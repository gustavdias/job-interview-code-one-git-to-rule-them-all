//setState & State Update Batching

// React batches state updates!
// All state updates from one and the same synchronous event handler are batched together.
// After setNewState(), you can’t immediately use the new state when NOT using the function form!
// React batches all setStates done during a React event handler, and applies them just before exiting its own browser event handler.


// Consider this code:

console.log(name); // prints name state, e.g. 'Manu'
setName('Max');
console.log(name); // ??? what gets printed? 'Max'?
// You could think that accessing the name state after setName('Max'); should yield the new value (e.g. 'Max') but this is NOT the case. Keep in mind, that the new state value is only available in the next component render cycle (which gets scheduled by calling setName()).

// Both concepts (batching and when new state is available) behave in the same way for both functional components with hooks as well as class-based components with this.setState()!

