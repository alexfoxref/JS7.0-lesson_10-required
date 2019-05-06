'use strict'

class Options {
    constructor(height = 'auto', width = 'auto', bg = 'inherit', fontSize = 30, textAlign = 'left') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createTextDiv(str) {
        let div = document.createElement('div'),
            body = document.querySelector('body'),
            px = 'px',
            pxHeight = 'px',
            pxWidth = 'px';

        div.textContent = str;
        body.appendChild(div);
        if (this.height == 'auto') {pxHeight = ''}
        if (this.width == 'auto') {pxWidth = ''}
        div.style.cssText = `height: ${this.height}${pxHeight}; width: ${this.width}${pxWidth}; background: ${this.bg}; font-size: ${this.fontSize}${px}; text-align: ${this.textAlign}`;
        console.log(`height: ${this.height}${pxHeight}; width: ${this.width}${pxWidth}; background: ${this.bg}; font-size: ${this.fontSize}${px}; text-align: ${this.textAlign}`);
    }
}

let text = new Options('auto', 300, 'blue', 22, 'right');

text.createTextDiv('Привет!');