import { sum } from "../sum";

test("check the sum of two variable", ()=> {
    
    const result = sum(5,5);
    expect(result).toBe(10);
});