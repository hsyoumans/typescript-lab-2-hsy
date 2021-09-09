import {JavaScriptGreeter} from "../src/javascriptgreeter";

describe ("JavaScriptGreeter", () => {
    test ("with greeting What's up, Billy?", () => {
        let newGreet = new JavaScriptGreeter("What's up");
        expect(newGreet.greet("Billy?")).toEqual("What's up, Billy?");
    });

    test ("with greeting What a fine moring it is! Mrs Youmans.", () => {
        let newGreet = new JavaScriptGreeter("What a fine moring it is!");
        expect(newGreet.greet("Mrs Youmans.")).toEqual("What a fine moring it is!, Mrs Youmans.");
    });

    test ("with greeting Are you having a good day? Mr Brown.", () => {
        let newGreet = new JavaScriptGreeter("Are you having a good day?");
        expect(newGreet.greet("Mr Brown.")).toEqual("Are you having a good day?, Mr Brown.");
    });

})