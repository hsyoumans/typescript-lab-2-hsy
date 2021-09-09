import {Greeter} from "./greeting";

export class LoudGreeter extends Greeter {
    private extra: string = "!";
    constructor (greeting: string) {
        super(greeting);
    }
 
    addVolume(): void {
        this.extra = this.extra + "!";
    }

    greet(name: string): string {
        return super.greet(name) + `${this.extra}`;
    }
}

