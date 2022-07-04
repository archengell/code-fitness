import * as typing from '../typing'

/**
 * @description Caesar Cipher Encryptor - AlgoExpert - Easy
 * Given a non-empty string of lowercase letters and a non-negative integer 
 * representing a key, write a function that returns a new string obtained by 
 * shifting every letter in the input string by k positions in the alphabet, 
 * where k is the key.
 * 
 * Note teh letters should 'wrap' around the alphabet; in other words, the letter 
 * 'z' shifted by one returns the letter 'a'.
 * 
 * @summary
 * @param string 
 * @param key 
 * @returns 
 */
function caesarCipherEncryptor(string: string, key: number) {
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let strArr: string[] = [...string]    
    let alphabetArr: string[] = [...alphabet]

    for(let i=0; i<strArr.length; i++){
        let strIdx: number = alphabetArr.indexOf(strArr[i])
        let newStrIdx: number = (strIdx + key) % alphabetArr.length
        strArr.splice(i,1,alphabetArr[newStrIdx])    }
    console.log(strArr)
  return '';
}

let caesarCipherEncryptorTests: typing.strNumObj = {
    'test1': {
        'string':'xyz',
        'key': 2
    },
    'test2': {
        'string':'abc',
        'key': 0
    },
    'test3': {
        'string':'abc',
        'key': 3
    },
    'test4': {
        'string':'iwufqnkqkqoolxzzlzihqfm',
        'key': 25
    },
    'test5': {
        'string':'iwufqnkqkqoolxzzlzihqfm',
        'key': 25
    },
    'test6': {
        'string':'iwufqnkqkqoolxzzlzihqfm',
        'key': 25
    },
    'test7': {
        'string':'iwufqnkqkqoolxzzlzihqfm',
        'key': 25
    },
    'test8': {
        'string':'iwufqnkqkqoolxzzlzihqfm',
        'key': 25
    },
}

caesarCipherEncryptor(caesarCipherEncryptorTests['string'] as string, caesarCipherEncryptorTests['key'] as number)

