import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/resMenuMock.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
})
it("it should load Restaurant Menu", async()=>{
    await act( async()=> render(<RestaurantMenu/>))
    const accordianHeader = screen.getByText(/Lunch/)
})