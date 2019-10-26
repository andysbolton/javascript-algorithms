type Matrix = number[][];

function make(length: number, value: number): Matrix {
  let res = new Array<Array<number>>(length);
  for (let i = 0; i < length; i++) {
    let row = new Array<number>(length);
    for (let j = 0; j < length; j++) {
      row[j] = value;
    }
    res[i] = row;
  }
  return res;
}

export { make };
export default Matrix;
