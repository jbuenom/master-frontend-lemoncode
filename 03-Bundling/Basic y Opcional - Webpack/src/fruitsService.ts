export function getLemons(fruits) {
  return fruits.filter(el => el === '🍋');
}

export function countFruitsByType(fruits) {
  const dicc = {};
  fruits.map(el => {
    if(dicc[el]){
      dicc[el]+=1;
    } else {
      dicc[el] = 1;
    }
  })

  return Object.entries(dicc);
}
