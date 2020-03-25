function theBeatlesPlay(arrMusician, arrInstrument) {
  let newArr = [];
  for (let i = 0; i < arrMusician.length; i++) {
    let curMusician = arrMusician[i];
    for (let j = 0; j < arrInstrument.length; j++) {
      let curInstrument = arrInstrument[j];
      newArr.push(`${curMusician} plays ${curInstrument}`);
    }
  }
  return newArr;
}