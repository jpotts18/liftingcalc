
export const POUND_TO_KILO = 2.20462262

const NONNEGATIVE_ERROR_MSG = "Negative Numbers not allowed"

export const poundsToKilograms = (pounds: number): number => {
    if (pounds < 0) {
        throw Error(NONNEGATIVE_ERROR_MSG)
    }
    return pounds * POUND_TO_KILO
}

export const kilogramsToPounds = (kilograms: number): number => {
    if (kilograms < 0) {
        throw Error(NONNEGATIVE_ERROR_MSG);
    }
    return kilograms / POUND_TO_KILO
}

export class OneRepMax {
    kilograms: number;
    reps: number;

    constructor(kilograms: number, reps: number) {
        if (kilograms > 600 || kilograms < 0 ) {
            throw Error("Kilograms out of range (0 to 600)")
        }
        this.kilograms = kilograms

        if (reps > 10 || reps <= 1) {
            throw Error("1RM should not be calculated on higher that 10 reps")
        }
        this.reps = reps
    }
    brzycki() {
        return this.kilograms * (36 / (37 - this.reps))
    }
    epley() {
        return  this.kilograms * (1 + 0.0333 * this.reps)
    }
    lombardi() {
        return this.kilograms * Math.pow(this.reps, 0.1)
    }
    oConner() {
        return this.kilograms * (1 + 0.025 * this.reps)
    }
    wathen() {
        const numerator = 100 * this.kilograms
        const denominator = 48.8 + (53.8 * Math.E ** (-0.075 * this.reps))
        return numerator / denominator
    }
}
