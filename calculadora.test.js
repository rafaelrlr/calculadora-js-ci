const { somar } = require("./calculadora");

describe('Teste da função somar', () => {
    test('deveria somar dois números inteiros positivos', () => {
        expect(somar(2,3)).toBe(5);
        expect(somar(4,3)).toBe(7);
    });

    test('Deveria somar dois números inteiros negativos', () => {
        expect(somar(-1,-1)).toBe(-2);
        expect(somar(-2.50,-3.50)).toBe(-6);
    });
});