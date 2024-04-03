/** Run Length Encoding | string | easy */
/*********************************************************** */
function runLengthEncoding(string: string) {
 
    let strArr: string[] = []
    let res: string

    let iter:number = 1;
    for(let i=0; i<string.length; i++){

        if(string[i] !== string[i+1] || iter === 9){
            strArr.push(iter.toString());
            strArr.push(string[i]);
            iter = 0;
        }
        iter++
    }

    res = strArr.join('')
    console.log(res)
    return res;
}
let case2:string = 'aA'
let case3:string = '122333'
let case4:string = '************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA' //9*3*7^6$7%6!9A9A2A
let case5:string = 'aAaAaaaaaAaaaAAAABbbbBBBB' //1a1A1a1A5a1A3a4A1B3b4B
let case6:string = '                          ' //9 9 8 
let case7:string = '1  222 333    444  555' //112 321 334 342 35
let case8:string = '1A2BB3CCC4DDDD' //111A122B133C144D
let case9:string =  '........______=========AAAA   AAABBBB   BBB' //6_9=4A3 3A4B3 3B
let case13:string = '[(aaaaaaa,bbbbbbb,ccccc,dddddd)]' //1[1(7a1,7b1,5c1,6d1)1]
let case14:string = ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s" //9;3;9'9'2'111273524142311s

runLengthEncoding(case14)