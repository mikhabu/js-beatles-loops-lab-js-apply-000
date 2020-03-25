function theBeatlesPlay(arrMusic, arrInstr) {
  let newArr = [];
  for (let i = 0; i < arrMusic.length; i++) {
    for (let j = 0; j < arrInstr.length; j++) {
      newArr.push(arrMusic[i] + arrInstr[j]);
    }
  }
  return newArr;
}