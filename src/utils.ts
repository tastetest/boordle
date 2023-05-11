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
  // this code is kind of pointless ngl 
}

// this stringifies both arrays and then compares the values between strings
export const equals = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

