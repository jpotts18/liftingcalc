
import { brzycki, kilogramsToPounds, poundsToKilograms } from './calc'

describe("Kilos to Lbs",() => {
   it("1 lb is 2.2 kilos", () => {
     expect(poundsToKilograms(1)).toBe(2.20462262);
   })
});