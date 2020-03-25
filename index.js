function theBeatlesPlay(arrMusician, arrInstrument) {
  let newArr = [];
  for (let i = 0; i < arrMusician.length; i++) {
    let curMusician = arrMusician[i];
    let curInstrument = arrInstrument[i];
    newArr.push(`${curMusician} plays ${curInstrument}`);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  while (i < arr.length) {
    arr[i] = arr[i] + `!!!`;
    i++;
  }
}