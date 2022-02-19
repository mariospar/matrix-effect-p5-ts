import { random } from "./utils";
import P5 from "p5";

export default class Char {
    private switchInterval: number;
    public value: string | number | null;

    constructor(
        public readonly p5: P5,
        public x: number,
        public y: number,
        private speed: number,
        private _first: boolean,
        private _opacity: number
    ) {
        this.value = this.updateChar();
        this.switchInterval = this.getSwitchInterval();
    }

    public getFirst(): boolean {
        return this._first;
    }

    public setFirst(value: boolean) {
        this._first = value;
    }

    public getOpacity(): number {
        return this._opacity;
    }

    public setOpacity(value: number) {
        this._opacity = value;
    }

    private getSwitchInterval() {
        return random(2, 25);
    }

    public setRandomChar() {
        const charType = Math.round(Math.random() * 5);
        if (charType > 1) {
            // set it to Katakana
            return String.fromCharCode(0x30a0 + random(0, 97, "floor"));
        } else {
            // set it to numeric
            return random(0, 10, "floor");
        }
    }

    public updateChar(): number | string | null {
        return this.p5.frameCount % this.switchInterval === 0
                ? this.setRandomChar()
                : null;
    }

    public rain() {
        this.y = this.y >= this.p5.height ? 0 : (this.y += this.speed);
    }
}
