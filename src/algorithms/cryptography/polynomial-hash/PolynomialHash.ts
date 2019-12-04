export default class PolynomialHash {
  private _modulus: number = 101;
  private _base: number = 37;

  constructor({ base, modulus }: { base?: number; modulus: number }) {
    if (base !== undefined) {
      this._base = base;
    }
    if (modulus !== undefined) {
      this._modulus = modulus;
    }
  }

  hash(val: string): number {
    const length = val.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
      let code = val.charCodeAt(i);
      result = code + this._base * result;
      result %= this._modulus;
    }
    return result;
  }

  roll(
    previousHash: number,
    previousWord: string,
    currentWord: string
  ): number {
    let hash = previousHash;

    const prevValue = previousWord.charCodeAt(0);
    const newValue = currentWord.charCodeAt(currentWord.length - 1);

    let prevValueMultiplier = 1;
    for (let i = 1; i < previousWord.length; i += 1) {
      prevValueMultiplier *= this._base;
      prevValueMultiplier %= this._modulus;
    }

    hash += this._modulus;
    hash -= (prevValue * prevValueMultiplier) % this._modulus;

    hash *= this._base;
    hash += newValue;
    hash %= this._modulus;

    return hash;
  }
}
