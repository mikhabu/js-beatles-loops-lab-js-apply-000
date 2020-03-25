function theBeatlesPlay(arrMusician, arrInstrument) {
  let newArr = [];
  for (let i = 0; i < arrMusician.length; i++) {
    let curMusician = arrMusician[i];
    let curInstrument = arrInstrument[i];
    newArr.push(`${curMusician} plays ${curInstrument}`);
  }
  return newArr;
}

