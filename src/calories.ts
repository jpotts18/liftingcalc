const LARGEST_HUMAN_IN_KG:number = 635
const TALLEST_HUMAN_IN_CM:number = 272
const OLDEST_HUMAN_AGE:number = 122


export type Macronutrients = {
    protein: number,
    carbohydrates: number,
    fat: number
}

export enum Gender { 
    Male,
    Female,
}

export type CaloriesByActivity = {
    sedentary: number,
    light: number,
    moderate: number, 
    very: number
    extreme: number
}

export class CalorieCalculator {

    kilograms: number;
    centimeters: number;
    age: number;
    gender: Gender;
    
    constructor(kilograms: number, centimeters: number, age: number, gender: Gender) {
        if (kilograms < 0 || kilograms > LARGEST_HUMAN_IN_KG) {
            throw new Error(`RangeException: Kilos out tolerance ${kilograms}`)
        }
        this.kilograms = kilograms
        if (centimeters < 0 || centimeters > TALLEST_HUMAN_IN_CM) {
            throw new Error(`RangeException: Centimeters out tolerance ${centimeters}`)
        }
        this.centimeters = centimeters
        if (age < 0 || age > OLDEST_HUMAN_AGE) {
            throw new Error(`RangeException: Age out of range ${age}`)
        }
        this.age = age
        this.gender = gender
    }

    // Mifflin St. Jeor Equation
    // https://en.wikipedia.org/wiki/Basal_metabolic_rate
    mifflin() {
        if (this.gender === Gender.Male) {
            return (10 * this.kilograms) + (6.25 * this.centimeters) - (5 * this.age) + 5 
        } else {
            return (10 * this.kilograms) * (6.25 * this.centimeters) - (5 * this.age) - 161
        }
    }

    calories(): CaloriesByActivity {
        const bmr = this.mifflin()
        return {
            sedentary: Math.round(bmr * 1.2),
            light: Math.round(bmr * 1.375),
            moderate: Math.round(bmr * 1.55),
            very: Math.round(bmr * 1.725),
            extreme: Math.round(bmr * 1.9)
        }
    }
}
