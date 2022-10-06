/*********************************************************/
/** NEED TO ADD SOME TEST CASES TO EACH PROBLEM SET!!! **/
/*******************************************************/


//non-constructible Change | Array | Easy
function nonConstructibleChange(coins: number[]) {
	let change: number = 0;
    if(coins.length == 1 && coins[0] == 1) {
        console.log(2)
        return 2
    }
	if(coins.length > 1){
		let coinSortd: number[] = coins.sort((a,b) => a - b)
        for(let i = 0; i<coinSortd.length; i++){
            // console.log('coin', coinSortd[i])
            change += coinSortd[i]
            // console.log('change', change)
            if(coinSortd[i+1] && coinSortd[i+1] > change+1){
                console.log(change+1)
                return change+1
            }
        };
        let lastVal: number = coinSortd[coinSortd.length-1]
		if(lastVal < change+1) {
            console.log(change+1)
            return change+1
        }
	}else{
        console.log(1)
		return 1;
	}
}





  
