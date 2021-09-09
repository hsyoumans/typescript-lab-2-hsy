import {Greeter} from "./greeting";

export class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, tagName?: string | undefined) {
        super(greeting);
        this.tagName = "h1";  
        if (tagName === undefined) {
            this.tagName = "h1";
        }
        else if (tagName !== undefined) {
            this.tagName = tagName;
        }
    }

    addHtmlElement(name:string) {
        return "<" + this.tagName + ">" + super.greet(name) + "</" + this.tagName + ">";
    }
}

 