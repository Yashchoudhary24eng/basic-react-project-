import Searchbar from "../Searchbar";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should be the working Searchbar and work perfictly", () => {
  
   render(<Searchbar/>); 

   const input= screen.getByPlaceholderText("search resturant");

   // Assertion
    expect(input).toBeInTheDocument(1);
});
