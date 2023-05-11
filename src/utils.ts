// do some magic here
export const magic = () => {
  //magic
  // do something here later

}

export default function checkIfGuessIsExactMatch(x: string[], y: string[]) {
  
  //x.every((i) => y.includes(i));
  if (x.every(elem => y.includes(elem))) {
    return true;
  } else {
    return false;
  }
}
