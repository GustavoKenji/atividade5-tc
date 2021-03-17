const coverageCode = require('../lib/coverageCode');
const code = new coverageCode();

describe('Test coverageCode class', () => {

    // fillArray
    test('array vazio', () => {
        expect(() => code.fillArrayOfStrings([])).toThrow('Invalid array');
    });

    test('array misto', () => {
        const newArray = code.fillArrayOfStrings([10, "codigo", true]);
        expect(newArray === ["10", "codigo", "true"]);
    });

    test("array de strings", () => {
      const newArray = code.fillArrayOfStrings(["193", "university", "false"]);
      expect(newArray === ["193", "university", "false"]);
    });

    // orderedArray
    test("array inválido", () => {
      expect(() => code.orderedArrayOfStrings([2000])).toThrow(
        "Invalid array"
      );
    });

    test("array desordenado", () => {
      const ordered = code.orderedArrayOfStrings([
        "zebra",
        "university",
        "abacaxi",
        "desenvolvedor",
      ]);
      expect(ordered === ["abacaxi", "desenvolvedor", "university", "zebra"]);
    });

    test("array ordenado", () => {
      const ordered = code.orderedArrayOfStrings([
        "abacaxi",
        "desenvolvedor",
        "university",
        "zebra",
      ]);
      expect(ordered === ["abacaxi", "desenvolvedor", "university", "zebra"]);
    });

    test("array com uma string", () => {
      const ordered = code.orderedArrayOfStrings(["abacaxi", "abacaxi"]);
      expect(ordered === ["abacaxi", "abacaxi"]);
    });
});