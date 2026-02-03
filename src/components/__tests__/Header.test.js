import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appstore from "../../utils/appStore";



test("should load header component properly", () => {

        render(
        <BrowserRouter>   
        <Provider store={appstore}>
        <Header/>
        </Provider>
        </BrowserRouter> 
        );

        const button = screen.getByRole("button",{name: "Login"});
        fireEvent.click(button);

        const button1 = screen.getByRole("button",{name: "Logout"});

        expect(button1).toBeInTheDocument();

})
