//import {Greeter} from "../src/greeting";
import {LoudGreeter} from "../src/loudgreeter";

describe ("Greeter", () => {
    test ("calling addVolume", () => {
        let addExtra = new LoudGreeter("Hello");
        addExtra.addVolume();
        expect (addExtra.greet("Chance")).toEqual("Hello, Chance!!!");
    });

    test ("calling addVolume 2x", () => {
        let addExtra = new LoudGreeter("Hello");
        addExtra.addVolume();
        addExtra.addVolume();
        expect (addExtra.greet("Chance")).toEqual("Hello, Chance!!!!");
    });

    test ("Without calling addVolume", () => {
        let getMore = new LoudGreeter("Hello").greet("Chance");
        expect (getMore).toEqual("Hello, Chance!!");
    });
    
})