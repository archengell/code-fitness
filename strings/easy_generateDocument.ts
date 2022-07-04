
/** Generate Document | string | easy */
/*********************************************************** */
function generateDocument(characters: string, document: string) {
    let chars: any = {}
    let doc: any = {}
    let res: boolean;
    let boolArr: boolean[] = []

    if(characters.length < document.length) {res = false};

    if(characters.length >= document.length){
        for(let elem of characters){
            chars[elem] = chars[elem] ? chars[elem]+1: 1;
        }
    
        for(let elem of document){
        doc[elem] = doc[elem] ? doc[elem]+1: 1;
        }

        for(let item of document){
            // console.log(`key: ${item} chars_value: ${chars[item]} ; doc_value: ${doc[item]} `)
            if (doc[item] <= chars[item]){
                boolArr.push(true)
            }else{
                boolArr.push(false)
            }
        }
        // console.log(boolArr)
        res = boolArr.every((item) => item == true)
    }
    // console.log(res)
    return res;
}
let [case1a, case1b] = ["Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"]; //true
let [case3a, case3b] = ["a", "a"]; //true
let [case2a, case2b] = ["A", "a"]; //false
let [case4a, case4b] = ["a hsgalhsa sanbjksbdkjba kjx", ""]; //true
let [case7a, case7b] = ["aheaollabbhb", "hello"]; //true
let [case8a, case8b] = ["aheaolabbhb", "hello"]; //false
let [case9a, case9b] = ["estssa", "testing"]; //false
let [case11a, case11b] = ["helloworld ", "hello wOrld"]; //false
let [case14a, case14b] = ["&*&you^a%^&8766 _=-09     docanCMakemthisdocument", "Can you make this document &"]; //true
let [case15a, case15b] = ["abcabcabcacbcdaabc", "bacaccadac"]; //true

generateDocument(case1a, case1b)