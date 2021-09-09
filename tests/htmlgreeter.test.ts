//import {Greeter} from "../src/greeting";
import {HtmlGreeter} from "../src/htmlgreeter";

describe (HtmlGreeter, () => {
    test ("default tagname, Hello Victor!", () => {
        let tagged = new HtmlGreeter("Hello");
        expect(tagged.addHtmlElement("Victor")).toEqual("<h1>Hello, Victor!</h1>");
    });

    test ("default tagname, Hello Victor!", () => {
        let tagged = new HtmlGreeter("Hello", "div");
        expect(tagged.addHtmlElement("Victor")).toEqual("<div>Hello, Victor!</div>");
    });

    test ("default tagname, Hello Victor!", () => {
        let tagged = new HtmlGreeter("Hello", "p");
        expect(tagged.addHtmlElement("Victor")).toEqual("<p>Hello, Victor!</p>");
    });

    test ("default tagname, Hello Victor!", () => {
        let tagged = new HtmlGreeter("Hello", "h1");
        expect(tagged.addHtmlElement("Victor")).toEqual("<h1>Hello, Victor!</h1>");
    });

})