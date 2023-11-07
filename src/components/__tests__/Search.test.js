import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should search resList", async () => {
  await act(async () => 
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, {target:{value: "chai"}})
    fireEvent.click(searchBtn)
    
    const resCards = screen.getAllByTestId("resCard")

    expect (searchBtn).toBeInTheDocument()
    expect(resCards).toHaveLength(2)
});

test("Should filter top rated restaurants", async () => {
  await act(async () => 
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));
    const topratedRestaurant = screen.getByRole("button", { name: "Top Rated Restaurent" });
    fireEvent.click(topratedRestaurant)
    
    const resCards = screen.getAllByTestId("resCard")

    expect(resCards).toHaveLength(7)
});
