
// time: O(n^2) | space: O(n)
function longestCommonPrefix(strs: string[]): string {
    let count: number = 1;
    let beforeCount: number = 1;
    let res: string = '';

    while(count === beforeCount){
        let prefix: string = strs[0].slice(0, count);

        let resBool: boolean = strs.every(word => {
            return word.startsWith(prefix)
        })
        if(resBool){
            res = prefix
            count++
            beforeCount++
        }else{
            beforeCount--
        }
    }
    console.log(res)
    return res
}

let lcpTests: {[key:string] : string[]} = {
    'test1': ['flower', 'flow', 'flight'],
    'test2': ['dog', 'racecar', 'car']
}

longestCommonPrefix(lcpTests['test1'])