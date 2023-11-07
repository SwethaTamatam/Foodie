import {render,screen} from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact Us", ()=>{

    it("should load contact us component", () => {
        render(<ContactUs />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });


    test("should load button inside contact compoennt", () => {
        render(<ContactUs />);

        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    });
    test("should load input fields inside conatact component",() =>{
        render(<ContactUs />);

        const inputs = screen.getAllByRole("textbox");

        expect(inputs).toHaveLength(2);
    })
})

