/**
 * AlgoExpert/Neet/Leet - string - medium - Longest Palindromic SubString 
 * @description Given a string, write a function that returns its 
 * longest palindromic substring.  You can assume that there will only be
 * (1) substring.
 * @summary time: o(n^2) | space: o(n)
 *  **write steps**
 * @param string 
 * @returns 
 */
function longestPalindromicSubstringV1(string: string): string {
    let left: number = 0;
    let right: number = 0;
    let res: string = ''
    let resLen: number = 0;

    for(let i = 0; i < string.length; i++){

        // check odd palindromes
        left = right = i;
        while(left>=0 && right < string.length && 
            [...string][left] == [...string][right]){
                if(right - left + 1 > resLen){
                    res = string.slice(left, right+1)
                    resLen = right - left + 1
                }
                --left; // = idx1 -= 1
                ++right; // = idx2 += 1
        }

        // check even palindromes
        left = i;
        right = i+1;
        while(left>=0 && right < string.length && 
            [...string][left] == [...string][right]){
                if(right - left + 1 > resLen){
                    res = string.slice(left, right+1)
                    resLen = right - left + 1
                }
                --left; // = idx1 -= 1
                ++right; // = idx2 += 1
        }
    }
    // console.log(res)
    return res
}




// let palinTest: string = 'xyzzyx'
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
console.log(longestPalindromicSubstringV1(longPalinSubStringTest7))
console.timeEnd()