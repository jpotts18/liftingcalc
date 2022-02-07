
const KILO_LB_CONVERSION = 2.20462262

export const poundsToKilograms = (pounds: number): number => {
    return pounds * KILO_LB_CONVERSION
}

export const kilogramsToPounds = (kilograms: number): number => {
    return kilograms / KILO_LB_CONVERSION
}

export const brzycki = (): number =>{
    return 1
}
