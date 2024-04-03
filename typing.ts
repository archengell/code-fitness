export type strNumBool = string | number | boolean

export type genericObj<T, U> = {
    /**
     * [Property in keyof T] denotes the iteration of all property names
     *  of type T, and the square bracket is the index signature syntax. 
     * Thus, the OptionsFlags type contains all properties from the type T 
     * and remaps their value to boolean.
     * resource: https://blog.logrocket.com/how-to-use-keyof-operator-typescript/
     */
    [Property in keyof T]: T | U
}


export type strNumObj = { 
    [key:string] : string | number | strNumObj
}

export type strNumArrObj = { 
    [key:string] : string[] | number[] | strNumArrObj
}

export type func = Function;