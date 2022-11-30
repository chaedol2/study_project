// alias사용하기, type은 자바스크립트에 내장되어이지 않다.(타입스크립트만 가능)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// 타입스크립트에서 union type 설정은 파이프로 한다.
// literal type과 union type 설정을 합쳐 resultConversion을 선언했다.
function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;
    // 런타임으로 union type 설정 하는 방법
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number'){
    //     return +result; // parseInt(result) === +result
    // }else{
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);