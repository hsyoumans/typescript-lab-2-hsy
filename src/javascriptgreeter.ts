import {Greeter} from "./greeting"

export class JavaScriptGreeter extends Greeter {
    constructor(greeting: string){
        super (greeting)
    }
    
    greet(name: string): string {
        return `${this.greeting}, ${name}`;
    }
}