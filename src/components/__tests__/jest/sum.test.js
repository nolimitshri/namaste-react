import { sum } from "../../sum"

test("Sum function should calculate the sum of two numbers", () => {

    const res = sum(3,4);

    expect(res).toBe(5);

})