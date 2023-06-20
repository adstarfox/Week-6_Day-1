const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
}=require('./functions')

describe(`Tests to see if returnTwo returns 2`, () => {
    test ('Return 2', () => {
        expect(returnTwo()).toEqual(2)
    })
})

describe(`tests the greeting function`, () => {
    test('Alex greeting', () => {
        expect(greeting('Alex')).toEqual('Hello, Alex')
    })
    
    test('Jill greeting', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill')
    })
})

describe('Math Functions', () => {
    test('Addition', () => {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })

    test(`Subtracttion `, () => {
        expect(subtract(5,4)).toEqual(1)
        expect(subtract(3,7)).toEqual(-4)
    })

    test(`Multiply`, () => {
        expect(multiply(5,4)).toEqual(20)
        expect(multiply(3,7)).toEqual(21)
    })

    test(`Division`, () => {
        expect(divide(2,1)).toEqual(2)
        expect(divide(6,3)).toEqual(2)
    })
})