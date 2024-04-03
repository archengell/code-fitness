/**
 * Selection Sort | Sorting | Easy
 * @description
 * @summary
 * @param array
 * @returns
 */
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let xMinIdx = i;
        for (let x = i + 1; x < array.length; x++) {
            if (array[x] < array[xMinIdx]) {
                xMinIdx = x;
            }
        }
        swap(i, xMinIdx, array);
    }
    return array;
}
