import {JSDOM} from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new JSDOM('<!doctype html><html><body></body></html>');

const document = dom.window.document;
const window = dom.window;

Object.keys(window).forEach((key) => {
    if(!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);