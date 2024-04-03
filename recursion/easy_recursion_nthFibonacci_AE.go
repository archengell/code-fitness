package main

import (
	"fmt"
)

func fibonacci() func(int) []int {
	return func(n int) (res []int) {
		res = []int{}

		for i := 0; i < n; i++ {
			if i == 0 {
				res = append(res, 0)
			} else if i == 1 {
				res = append(res, 1)
			} else {
				res = append(res, res[i-1]+res[i-2])
			}

		}
		return res
	}
}

func main() {
	closure := fibonacci()
	fmt.Println(closure(8))
}
