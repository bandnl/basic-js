const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  encrypt(string, key) {
    if (!!string && !!key) {
      let res = '';
      let keyCount = 0;
      for (let ind = 0; ind < string.length; ind++) {
        if (this.a.includes(string[ind].toUpperCase())) {
          if (keyCount > key.length - 1) {keyCount = 0;}
          const numb = this.a.indexOf(string[ind].toUpperCase()) + this.a.indexOf(key[keyCount].toUpperCase());
          const pos = numb < this.a.length ? numb : Math.abs(this.a.length - numb);
          res += this.a.at(pos);
          keyCount++;
        } else {
          res += string[ind];
        }
      }
      return this.type ? res : res.split('').reverse().join('');
    } else throw new Error('Incorrect arguments!');
  }

  decrypt(string, key) {
    if (!!string && !!key) {
      let res = '';
      let keyCount = 0;
      for (let ind = 0; ind < string.length; ind++) {
        if (this.a.includes(string[ind].toUpperCase())) {
          if (keyCount > key.length - 1) {keyCount = 0;}
          const numb = this.a.indexOf(string[ind].toUpperCase()) - this.a.indexOf(key[keyCount].toUpperCase());
          const pos = numb >= 0 ? numb : Math.abs(this.a.length + numb);
          res += this.a.at(pos);
          keyCount++;
        } else {
          res += string[ind];
        }
      }
      return this.type ? res : res.split('').reverse().join('');
    } else throw new Error('Incorrect arguments!');
  }

  longKey(string, key) {
    return key.repeat(Math.ceil(string.length / key.length)).slice(0, string.length);
  }
}

//const modKey = string.length > key.length ? this.longKey(string, key) : (string.length <  key.length ? key.slice(0, string.length) : key);
      

module.exports = {
  VigenereCipheringMachine
};
