import Sum from "../sum";


// create the .js file and then import into the 
// test.js file 
// then create the test_case for this file

test("testing of the sum function", () => {
    let a = 10;
    let b = 20;
    let output = a + b;
    expect(Sum(a, b)).toBe(output)

})

test("testing of the New Values",()=>{
    expect(Sum(null,10)).toBe(10)
})

