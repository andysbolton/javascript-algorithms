export default class SimplePolynomialHash {
  private _base: number = 17;

  constructor(base?: number) {
    if (base !== undefined) {
      this._base = base;
    }
  }

  hash(val: string) {
    const length = val.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
      let code = val.charCodeAt(i);
      result += code * this._base ** i;
    }
    return result;
  }

  protected rollInternal(
    previousHash: number,
    previousWord: string,
    currentWord: string,
    modulus?: number
  ): number {
    const newCharAt = currentWord.length - 1;
    const previousCharValue = previousWord.charCodeAt(0);
    const newHash =
      (previousHash - previousCharValue) / this._base +
      currentWord.charCodeAt(newCharAt) * this._base ** newCharAt;

    return modulus !== undefined ? newHash % modulus : newHash;
  }

  roll(
    previousHash: number,
    previousWord: string,
    currentWord: string
  ): number {
    return this.rollInternal(previousHash, previousWord, currentWord);
  }
}
