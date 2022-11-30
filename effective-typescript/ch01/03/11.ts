function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: boolean, b: boolean): number

function add(a: any, b: any){
    return a + b
}

const three = add(1, 2)
const twelve = add('1', '2')
const thirteen = add(false, true)

export default {}