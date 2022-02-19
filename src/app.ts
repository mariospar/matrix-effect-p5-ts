const FADE_INTERVAL = 1.6;
const CHAR_SIZE = 14;

import P5 from "p5";
import { random } from "./utils";
import Stream from "./stream";

const sketch = (p5: P5) => {
    const streams: Stream[] = [];

    p5.setup = () => {
        p5.createCanvas(window.innerHeight, window.innerHeight);

        p5.background(0);

        let x = 0;

        for (var index = 0; index <= p5.width / CHAR_SIZE; index++) {
            const stream = new Stream(p5, FADE_INTERVAL, CHAR_SIZE);

            stream.generateSymbols(x, random(-2000, 0));

            streams.push(stream);

            x += CHAR_SIZE;
        }

        p5.loadFont("Consolas");
        p5.textSize(CHAR_SIZE);
    };

    p5.draw = () => {
        p5.background(0, 150);

        streams.forEach((stream: Stream) => {
            stream.render();
        });
    };
};

export default new P5(sketch);