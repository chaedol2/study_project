interface Square {
    width: number
}

interface Rectangle extends Square {
    height: number
}
type Shape = Square | Rectangle

function calculateArea(shape: Shape){
    // instaceof는 구현되어있는 클래스를 지칭해야 한다.(인터페이스는 안됨) 
    // 런타임 시 인터페이스는 사라진다.
    if(shape instanceof Rectangle){
        // ~~~~~~~ 'Rectangle' only refers to a type,
        //         but is being used as a value here
        return shape.width * shape.height
        //    ~~~~~~~ Property 'height' does not exist
        //            on type 'Shape'
    } else {
        return shape.width * shape.width
    }
}

export default {}