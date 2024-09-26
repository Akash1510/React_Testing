import renderer from 'react-test-renderer'
import User from '../User'

test('Class based Component checking', () => { 
    const viewData = renderer.create(<User/>).getInstance()
    expect(viewData.ClassTest()).toMatch("this is Class Component")
 })

 test ("method Checking in the Components",()=>{
    const viewData = renderer.create(<User/>).getInstance()
    expect(viewData.Hello()).toMatch("hello Akash")
 })