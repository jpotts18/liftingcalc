
import { OneRepMax, kilogramsToPounds, poundsToKilograms } from './calc'

const CONSTANT = 2.20462262
const ONE_BILLION = 1e9
const BIG_KG = CONSTANT * ONE_BILLION

describe("Kilos to Lbs", () => {
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

describe("Pounds to Kilos", () => {
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

describe("1RM Formula", () => {
  it("Should calculate based on 100kg for 5 reps", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.brzycki()).toBe(112.5)
  })
  describe("Rep Ranges", () => {
    // Range Validation on Reps
    it("No negative reps", () => {
      expect(() => {
        new OneRepMax(100, -1)
      }).toThrowError()
    })
    it("No calculating on 1 since it is known", () => {
      expect(() => {
        new OneRepMax(100, 1)
      })
    })
    it("Rep upperbound of 10 reps", () => {
      expect(() => {
        new OneRepMax(100, 100)
      }).toThrowError()
    })
  })
  // Range Validation on Kg
  describe("Kilogram Ranges", () => {
    it("should be a positie number", () => {
      expect(() => {
        new OneRepMax(-11, 1)
      }).toThrowError()
    })
    it("should be humanly possible",() => {
      expect(() => {
        new OneRepMax(601, 2)
      }).toThrowError()
    })
  })
})


describe("Brzycki Formula", () => {
  it("100kg for 5 reps = 112.5", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.brzycki()).toBe(112.5)
  })
  it("400kg for 5 reps = 450", () => {
    const oneRepMax = new OneRepMax(400, 5)
    expect(oneRepMax.brzycki()).toBe(450)
  })
})

describe("Epley Formula", () => {
  it("100kg by 5 reps = 116.7", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.epley()).toBe(116.65)
  })
  it("400kg by 5 reps = 466.6", () => {
    const oneRepMax = new OneRepMax(400, 5)
    expect(oneRepMax.epley()).toBe(466.6)
  })
})

describe("Lombardi Formula", () => {
  it("100kg by 5 reps = 117.5", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.lombardi()).toBe(117.4618943088019)
  })
  it("400kg by 5 reps = 469.8", () => {
    const oneRepMax = new OneRepMax(400, 5)
    expect(oneRepMax.lombardi()).toBe(469.8475772352076)
  }) 
})

describe("O'Conner Formula", () => {
  it("100kg by 5 reps = 112.5", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.oConner()).toBe(112.5)
  })
  it("400kg by 5 reps = 450", () => {
    const oneRepMax = new OneRepMax(400, 5)
    expect(oneRepMax.oConner()).toBe(450)
  }) 
})

describe("Wathan Formula", () => {
  it("100kg by 5 reps = 116.6", () => {
    const oneRepMax = new OneRepMax(100, 5)
    expect(oneRepMax.wathen()).toBe(116.58250529118924)
  })
  it("400kg by 5 reps = 466.3", () => {
    const oneRepMax = new OneRepMax(400, 5)
    expect(oneRepMax.wathen()).toBe(466.33002116475694)
  }) 
})