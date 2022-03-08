
import { centimetersToInches, inchesToCentimeters, MacroCalculator, Gender, Activity, } from './macros'

describe("Centimeters to Inches", () => {
    it('45 cm should be 17 inches', () =>{
        expect(centimetersToInches(45)).toBe(17.716545)
    })

    it("should be a positive value", () => {
        expect(() => {
          centimetersToInches(-1)
        }).toThrowError(Error)
    })

    it("1 inch is 2.54 cm", () => {
        expect(inchesToCentimeters(1)).toBe(2.5399986284007405)
    })
    it("should be a positive value", () => {
        expect(() => {
          inchesToCentimeters(-1)
        }).toThrowError(Error)
    })
})

describe("Calorie calculation", () => {
    it("Has lower bound on Kilos", () => {
        expect(() => {
            const calc = new MacroCalculator(-1, -1,Gender.Male, Activity.Moderate)
        }).toThrowError(Error)

    })
    it("Has upper bound on Kilos", () => {
        expect(() => {
            const calc = new MacroCalculator(900, -1, Gender.Male, Activity.Moderate)
        }).toThrowError(Error)
    })

    it("Has lower bound on Centimeters", () => {
        expect(() => {
            const calc = new MacroCalculator(90, -1,Gender.Male, Activity.Moderate)
        }).toThrowError(Error)
    })

    it("Has upper bound on Centimeters", () => {
        expect(() => {
            const calc = new MacroCalculator(90, 300, Gender.Male, Activity.Moderate)
        }).toThrowError(Error)
    })
})