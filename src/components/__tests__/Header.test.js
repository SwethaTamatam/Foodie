import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("should render Header compoennt with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )
    const loginButton = screen.getByRole("button", {name: "Login"})
   // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument()
})

test("should render cart in the Header compoennt ",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )
    const loginButton = screen.getByText(/🛒/)
   // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument()
})
test("should change login Button to Logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )
    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"})


    expect(logoutButton).toBeInTheDocument()
})
