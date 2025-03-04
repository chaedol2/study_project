interface Cylinder {
    radius: number
    height: number
}
// 여기에선 타입으로 쓰이고 있다.

const Cylinder = (radius: number, height: number) => ({radius, height})

// 여기에서는 변수로 사용되고 있다.

export default {}