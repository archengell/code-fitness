/**
 * AlgoExpert/Neet/Leet - string - medium - Longest Palindromic SubString 
 * @description Given a string, write a function that returns its 
 * longest palindromic substring.  You can assume that there will only be
 * (1) substring.
 * @summary time: o(n^3) **write why** | space: o(n)
 *  **write steps**
 * @param string 
 * @returns 
 */

function longestPalindromicSubstring(string: string): string {
    let res: string;
    let subStr: string
    let map = new Map<number, string>()

    for(let i = 0; i < string.length; i++){
        for(let j = i; j < string.length; j++){
            subStr = string.slice(i, j+1)
            // console.log(subStr)
            if(isPalindrome(subStr)){
                map.set(subStr.length, subStr)
            }
        }
    }
    res = map.get(Math.max(...map.keys())) || ''
    console.log(res)
    return res
}

function isPalindrome(str: string): boolean {
    return JSON.stringify([...str]) === JSON.stringify([...str].reverse())
}

let palinTest: string = 'xyzzyx'
let longPalinSubStringTest: string = 'abaxyzzyxf'
let longPalinSubStringTest1: string = 'a'
let longPalinSubStringTest3: string = "it's highnoon"
let longPalinSubStringTest4: string = "abccbait's highnoon"
let longPalinSubStringTest7: string = 'abcdefgfedcba'
let longPalinSubStringTest10: string = 'zzzzzzz2345abbbba5432zzbbababa'
let longPalinSubStringTest11: string = 'z234a5abbbba54a32z'
let longPalinSubStringTest12: string = 'z234a5abbba54a32z'
let longPalinSubStringTest13: string = "civilwartestingwhetherthatnaptionoranynartion \
soconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecome \
todedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthat \
nationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannot \
dedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggled \
herehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenor \
longrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobe \
dedicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisrather \
forustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetake \
increaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehigh \
lyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthof \
freedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

// console.log(isPalindrome(palinTest))
console.time()
longestPalindromicSubstring(longPalinSubStringTest12)
console.timeEnd()