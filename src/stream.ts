import { random } from "./utils";
import P5 from "p5";
import Char from "./char";

export default class Stream {
    public chars: Char[];
    private totalChars: number;
    private speed: number;

    constructor(
        public readonly p5: P5,
        public readonly fadeInterval: number,
        public readonly charSize: number
    ) {
        this.chars = [];
        this.totalChars = random(5, 35);
        this.speed = random(5, 22);
    }

    public generateSymbols(x: number, y: number) {
        let opacity = 255;
        let first = random(0, 4) === 1;

        for (let index = 0; index <= this.totalChars; index++) {
            const char = new Char(this.p5, x, y, this.speed, first, opacity);
            this.chars.push(char);
            opacity -= 255 / this.totalChars / this.fadeInterval;
            y -= this.charSize;
            first = false;
        }
    }

    public render() {
        this.chars.forEach((char: Char) => {
            if (char.getFirst()) {
                this.p5.fill(140, 255, 170, char.getOpacity());
            } else {
                this.p5.fill(0, 255, 70, char.getOpacity());
            }
            this.p5.text(char.value as number | string, char.x, char.y);
            char.rain();
            char.setRandomChar();
        });
    }
}
