const { somar, subtrair } = require("./calculadora");

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

describe('Teste da função subtrair', () => {
    test('Deveria subtrair dois números inteiros positivos', () => {
        expect(subtrair(7,2)).toBe(5);
        expect(subtrair(4,3)).toBe(1);
    })

    test('Deveria subtrair dois números inteiros negativos', () => {
        expect(subtrair(-40,-12)).toBe(-28);
        expect(subtrair(-1,-1)).toBe(0);
    });
})