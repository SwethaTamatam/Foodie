import { render, screen } from "@testing-library/react"
import Restaurantcard from "../RestaurentCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../RestaurentCard"

test("should render Restaurant compoennt with props data",()=>{
    render(<Restaurantcard item = {MOCK_DATA}/>);

    const name = screen.getByText("Aubree");
   
    expect(name).toBeInTheDocument();
})

test("should render Restaurant component with Offer", ()=>{
    const RestaurantCardPromoted = withPromotedLabel(Restaurantcard)
    render( <RestaurantCardPromoted item={MOCK_DATA}/>);
    const offer = screen.getByText(/₹150 OFF/)
    expect(offer).toBeInTheDocument();
})