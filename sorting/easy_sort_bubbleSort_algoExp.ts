
/**
 * easy - sort - algoExp - bubble sort
 * @description
 * @summary
 * @param array 
 * @returns 
 */
function bubbleSort(array: number[]) {
	let swapped:boolean;
	do{
		swapped = false
		for(let i=0; i<array.length-1; i++){
			if(array[i]>array[i+1]){
                swap(i, i+1, array)
				swapped = true
			}
		}
	}while(swapped)
    console.log(array)
	return array;
}

let what:number[] = [8, 5, 2, 9, 5, 6, 3]
bubbleSort(what)