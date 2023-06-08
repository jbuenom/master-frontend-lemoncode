// Players Order

const getPlayersOrder = (array, turns) => {
  let arr = [...array];
  for (let index = 0; index < turns; index++) {
    let [first, ...others] = arr;
    arr = [...others, first];
  }
  return arr;
};


// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]