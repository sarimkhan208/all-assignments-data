import {fireEvent, render,screen} from '@testing-library/react'
import App from '../App'
import Button from '../Components/Button'
import Counter from '../Components/Counter'


// describe("Testing the button component",()=>{
    // it("button should render on DOM",()=>{
    //     render(
    //         <Button size={'large'} color={'teal'} >
    //             Click Me 
    //         </Button>
    //     )
    //     const button = screen.getByText("Click Me")
    //     expect(button).toBeInTheDocument();
    // })
    // it("Button should renders on DOM",()=>{
    //     render(
    //         <Button>Custom Hook</Button>
    //     )
    //     const customButton = screen.getAllByTestId("custom-hook")
    //     expect(customButton).toBeInTheDocument()
    // })
//     it("Button should have text Click me",()=>{
//         render(<App/>)
//         const buttons = screen.getByTestId("custom-hook")
//         expect(buttons).toHaveTextContent("Click Me")
//     })
    

// })

// describe("Testing the Counter components",()=>{
//     it("Counter should render",()=>{
//         render(<Counter/>)
//         const text = screen.getByTestId("counter");
//         const button = screen.getByTestId("add-btn");
//         expect(text).toBeInTheDocument()
//         expect(button).toBeInTheDocument()
//     })
//     it("Should have initial value 0",()=>{
//         render(<Counter/>)
//         const value = screen.getByTestId("counter")
//         expect(value).toHaveTextContent("Counter:0")
//     })
//     it("On clicking the add btn value should increase",()=>{
//         render(<Counter/>)
//         const value = screen.getByTestId("counter")
//         expect.toHaveTextContent("Counter:0")
//         const addBtn = screen.getByTestId("add-btn")
//         fireEvent.click(addBtn)
//         expect.toHaveTextContent("Counter:1")
//     })
    
// })


describe("Testing the counter component",()=>{
    it("Counter componet should present in the DOM",()=>{
        render(<Counter/>)
        const text = screen.getByTestId("counter")
        const addBtn = screen.getByTestId("add-btn")
        const reduceBtn = screen.getByTestId("reduce-btn")
        expect(text).toBeInTheDocument()
        expect(addBtn).toBeInTheDocument()
        expect(reduceBtn).toBeInTheDocument()
    })
    it("inital counter value should be 0",()=>{
        render(<Counter/>)
        const value = screen.getByTestId("counter")
        expect(value).toHaveTextContent("Counter:0")
    })

    it("On clicking add button value should increase by 5",()=>{
        render(<Counter/>)
        const value = screen.getByTestId("counter");
        expect(value).toHaveTextContent("Counter:0");
        const addBtn = screen.getByTestId("add-btn");
        fireEvent.click(addBtn)
        expect(value).toHaveTextContent("Counter:5");
    })

    it("On clicking reduce button value should decrease by 5",()=>{
        render(<Counter/>)
        const value = screen.getByTestId("counter");
        expect(value).toHaveTextContent("Counter:0");
        const reduceBtn = screen.getByTestId("reduce-btn");
        fireEvent.click(reduceBtn)
        expect(value).toHaveTextContent("Counter:-5");
    })
    
})