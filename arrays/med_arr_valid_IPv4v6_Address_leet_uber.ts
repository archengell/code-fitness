


export function validIPAddress(queryIP: string): string {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};'"\\|,<>\/?~]/;
    let res: string;

    if(specialChars.test(queryIP)) { res = 'Neither'};
    
    if(isIPv4(queryIP)) { res = 'IPv4'};
    if(isIPv6(queryIP)) { res = 'IPv6'};
    if(!isIPv4(queryIP) && !isIPv6(queryIP)) { res = 'Neither'};

    console.log('res:', res);
    return res;
};

export function isIPv4(str: string){
    let letters: string = 'abcdefghijklmnopqrstuvmxyz'
    let strArr: string[] = str.split('.');
    if(strArr.length != 4) return false;

    let hasLeadingZeroBool: boolean = (
        strArr.some(str => { 
            if( [...str].length > 1 && str.startsWith('0')){
                return true
            }else{ 
                return false
            }
        })
    )
    if(hasLeadingZeroBool) return false;

    let checkValues: boolean = (
        strArr.every( (str: string) => 
            { return ( parseInt(str) >= 0 && parseInt(str) <=255 ) }
        )
    )
    if(!checkValues) return false;

    //this is risky because its assuming this doesn't occur:
    // 1e1.2f2.3ff.5hg = a letter in every x_i
    let containsLetter: boolean = (
        strArr.some( (str: string) => // [1e1, 4, 5, 6 ]
           [...str].some( (elem: string) => [...letters].includes(elem.toLocaleLowerCase()))) // [1, e, 1]
    )
    if(containsLetter) return false;

    let checkLengthsIPv4: boolean = (
        strArr.every( (str: string) => 
            { return (str.length > 0 && str.length <= 4) }
        )
    );
    if(!checkLengthsIPv4) return false;
 
    return true;
}

export function isIPv6(str: string){

    let disallowedLetters = 'ghijklmnopqrstuvwxyz';

    let strArr: string[] = str.split(':');
    if(strArr.length != 8) return false;

    let checkLengthsIPv6: boolean = (
        strArr.every( (str: string) => 
            { return (str.length > 0 && str.length <= 4) }
        )
    );
    if(!checkLengthsIPv6) return false;

    let containsDisallowedLetter: boolean = (
        strArr.some( (str: string) => // [1e1, 4, 5, 6 ]
           [...str].some( (elem: string) => [...disallowedLetters].includes(elem.toLocaleLowerCase()))) // [1, e, 1]
    )
    if(containsDisallowedLetter) return false;

    return true
}



const validIPAddressTests: {[key:string]: string} = {
    'test1': "172.16.254.1", // valid
    'test2': "2001:0db8:85a3:0:0:8A2E:0370:7334", // valid
    'test3': "256.256.256.256", //invalid
    'test4': "192.168.1.00", //invalid
    'test5': "192.168@1.1", // invalid
    'test6': "192.1234.1.00", // invalid
    'test7': "2001:0db8:85a3:0000:0000:8a2e:0370:7334", // valid
    'test8': "2001:0db8:85a3::8A2E:037j:7334", // invalid
    'test9': "02001:0db8:85a3:0000:0000:8a2e:0370:7334", // invalid
    'test10': "10.355.1.21", // invalid
    'test11': "1e1.4.5.6", //invalid
    'test12': "20EE:FGb8:85a3:0:0:8A2E:0370:7334", //invalid: contains G!
    'test13': "192.0.0.1" // valid

}

validIPAddress(validIPAddressTests['test13'])
// let letters: string = 'abcdefghijklmnopqrstuvmxyz'
// let testy: string[] = "1e1.4.5.6".split('.');
// console.log(testy)
// let next = [...testy[0]]
// console.log(next)

// let out = next.some( elem => [...letters].includes(elem))
// console.log(out)
