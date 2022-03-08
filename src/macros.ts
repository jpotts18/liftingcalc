import { NONNEGATIVE_ERROR_MSG } from "./utils"


export const CENTIMETER_TO_INCH: number = 0.393701
const LARGEST_HUMAN_IN_KG:number = 635
const TALLEST_HUMAN_IN_CM:number = 272

export const centimetersToInches = (centimeters:number) => {
    if (centimeters < 0) {
        throw Error(NONNEGATIVE_ERROR_MSG)
    }
    return centimeters * CENTIMETER_TO_INCH
}

export const inchesToCentimeters = (inches:number) => {
    if (inches < 0) {
        throw Error(NONNEGATIVE_ERROR_MSG)
    }
    return inches / CENTIMETER_TO_INCH
}

export type Macronutrients = {
    protein: number,
    carbohydrates: number,
    fat: number
}

export enum Gender { 
    Male,
    Female,
}

export enum Activity {
    Sedentary = 0,
    Light = 1,
    Moderate = 2,
    Very = 3,
    Extra = 4
}

export class MacroCalculator {

    kilograms: number;
    centimeters: number;
    gender: Gender;
    activityLevel: Activity;
    
    constructor(kilograms: number, centimeters: number, gender: Gender, activityLevel: Activity) {
        if (kilograms < 0 || kilograms > LARGEST_HUMAN_IN_KG) {
            throw new Error(`RangeException: Kilos out tolerance ${kilograms}`)
        }
        this.kilograms = kilograms
        if (centimeters < 0 || centimeters > TALLEST_HUMAN_IN_CM) {
            throw new Error(`RangeException: Centimeters out tolerance ${centimeters}`)
        }
        this.centimeters = centimeters

        this.gender = gender
        this.activityLevel = activityLevel
    }

    // Mifflin St. Jeor Equation
    // Male =  10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
    calculateCalories() {
        if (this.gender === Gender.Male) {
            return 10 * this.kilograms + 6.25 * this.centimeters
        }
    }

    calculate() {

    }
}
