
import { brzycki, kilogramsToPounds, poundsToKilograms } from './calc'

const CONSTANT = 2.20462262
const ONE_BILLION = 1e9
const BIG_KG = CONSTANT * ONE_BILLION

describe("Kilos to Lbs",() => {
   it("1 lb is 2.2 kilos", () => {
     expect(poundsToKilograms(1)).toBe(CONSTANT);
   })
   it("should be a positive value", () => {
     expect(() => {
       poundsToKilograms(-1)
     }).toThrowError(Error)
   })
   it("should accept large numbers 💸", () => {
     expect(poundsToKilograms(ONE_BILLION)).toBe(BIG_KG)
   })
});

describe("Pounds to Kilos",() => {
  it("2.2 lbs should be 1 Kg", () => {
    expect(kilogramsToPounds(CONSTANT)).toBe(1)
  })
  it("Should be a positive value", () => {
    expect(() => {
      kilogramsToPounds(-1)
    }).toThrowError()
  })
  it("should accept large numbers ", () => {
    // expect(kilogramsToPounds(BIG_KG)).toBe(ONE_BILLION)
  })
})