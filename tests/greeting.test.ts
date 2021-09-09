import {Greeter} from "../src/greeting";

describe ("Greeter", () => {
  test("greet with Hello, Janice!", () => {
    const greets = new Greeter("Hello");
    const greeted = greets.greet("Janice");
    expect(greeted).toEqual("Hello, Janice!");
  });

  test("greet with Good morning, William!", () => {
    const greets = new Greeter("Good morning");
    const greeted = greets.greet("William");
    expect(greeted).toEqual("Good morning, William!");
  });

});