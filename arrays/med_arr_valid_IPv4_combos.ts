import { isIPv4 } from './med_arr_valid_IPv4v6_Address_leet_uber';
import * as utils from '../utils'

/**
 * @name
 * @description
 * @example
 * @summary
 * @param string 
 * @returns 
 */
function validIPAddresses(string: string): string[] {
    let validIPv4: string[]= [];
    let IPv4Parts: string[] = new Array(4).fill('');

    for(let i = 1; i < Math.min(string.length, 4); i++){
        IPv4Parts[0] = string.slice(0, i);
        for(let j = i + 1; j < i + Math.min(string.length - i, 4); j++){
            IPv4Parts[1] = string.slice(i, j);
            for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++){
                IPv4Parts[2] = string.slice(j, k);
                IPv4Parts[3] = string.slice(k);
                if(isIPv4(IPv4Parts.join('.'))) validIPv4.push(IPv4Parts.join('.'))
            }
        };
    };
    console.log(validIPv4);
    return validIPv4;
  }




// function isIPv4PartValid(str:string): boolean {
//     let letters: string = 'abcdefghijklmnopqrstuvmxyz'
//     if(str.length <=3) return false;

//     let hasLeadingZeroBool: boolean = (
//         [...str].length > 1 && str.startsWith('0')
//     ) ?  true : false;     
//     if(hasLeadingZeroBool) return false;

//     let checkValues: boolean = (
//         ( parseInt(str) >= 0 && parseInt(str) <=255 )
//     )
//     if(!checkValues) return false;

//     //this is risky because its assuming this doesn't occur:
//     // 1e1.2f2.3ff.5hg = a letter in every x_i
//     let containsLetter: boolean = (
//         [...str].some((elem: string) => 
//         [...letters].includes(elem.toLocaleLowerCase())) // [1, e, 1]
//     );
//     if(containsLetter) return false;

//     return true;
// }

let validIPAddressTests: {[key: string]: string} = {
    'test1': '1921680',
    'test2': '3700100',
    'test3': '9743',
    'test4': '97430',
    'test5': '997430'
}


utils.timed(validIPAddresses, [validIPAddressTests ['test1']])

