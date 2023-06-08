// Califications

import { values } from "./ejercicio-114.js";

interface Califications {
  [key: string]: number;
}

const eso2o: Califications = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8
};

function printAverage(califications: Califications) {
  const averageCalification = calcAverage(values(califications));
  return assignTextToCalification(averageCalification);
}

function calcAverage(arrValues: number[]): number {
  return arrValues.reduce((acc, curr) => acc + curr) / arrValues.length;
}

function assignTextToCalification(averageCalification: number): string {
  console.log(averageCalification)
  if(averageCalification === 10) {
    return 'Matrícula de Honor';
  } else if(averageCalification >= 9) {
    return 'Sobresaliente';
  } else if(averageCalification >= 7) {
    return 'Notable';
  } else if(averageCalification >= 6) {
    return 'Bien';
  } else if(averageCalification >= 5) {
    return 'Suficiente';
  } else if(averageCalification >= 4) {
    return 'Insuficiente';
  } else {
    return 'Muy deficiente'
  }
}

console.log(printAverage(eso2o));
