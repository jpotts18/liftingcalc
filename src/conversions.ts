import { NONNEGATIVE_ERROR_MSG } from "./utils"

export const CENTIMETER_TO_INCH: number = 0.393701

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

export const POUND_TO_KILO = 2.20462262

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
