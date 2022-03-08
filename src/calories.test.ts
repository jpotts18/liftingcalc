
import { centimetersToInches, inchesToCentimeters, kilogramsToPounds } from './conversions'
import { CalorieCalculator, Gender } from './calories'

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
            const calc = new CalorieCalculator(-1, -1, 1, Gender.Male)
        }).toThrowError(Error)

    })
    it("Has upper bound on Kilos", () => {
        expect(() => {
            const calc = new CalorieCalculator(900, -1, 1, Gender.Male)
        }).toThrowError(Error)
    })

    it("Has lower bound on Centimeters", () => {
        expect(() => {
            const calc = new CalorieCalculator(90, -1, 1, Gender.Male)
        }).toThrowError(Error)
    })

    it("Has upper bound on Centimeters", () => {
        expect(() => {
            const calc = new CalorieCalculator(90, 300, 1, Gender.Male)
        }).toThrowError(Error)
    })
    it("Has lower bound on age", () => {
        expect(() => {
            const calc = new CalorieCalculator(90, 300, -1, Gender.Male)
        }).toThrowError(Error)
    })
    it("Has upper bound on age", () => {
        expect(() => {
            const calc = new CalorieCalculator(90, 300, 130, Gender.Male)
        }).toThrowError(Error)
    })
})

describe("Calories", () => {
    it("Calculates different levels of activity", () => {
        const calc = new CalorieCalculator(kilogramsToPounds(195), inchesToCentimeters(70), 32, Gender.Male)
        const cals = calc.calories()
        expect(cals.sedentary).toBe(2209)
        expect(cals.light).toBe(2531)
        expect(cals.moderate).toBe(2853)
        expect(cals.very).toBe(3175)
        expect(cals.extreme).toBe(3497)
    })
})