import Leon from '../src/main';
import {
    expect
} from 'chai';

import { JSDOM } from 'jsdom';
const window = (new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, { resources: "usable" })).window;
(global as any).document = window.document;;
(global as any).window = window;

describe('leon-test-cli init', function(){
    it('say hello', function(){
        const result = Leon.init();
        expect(result).to.equal('hello world!');
    })
})