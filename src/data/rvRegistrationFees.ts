/**
 * RV Registration Fee Calculators by State
 * Based on 2026 state DMV data
 * Fees typically based on: value, weight, age, or combination
 */

export interface RegistrationFeeResult {
  registrationFee: number;
  titleFee: number;
  plateFee: number;
  docFee: number;
  totalFees: number;
  breakdown: string[];
  notes?: string;
}

/**
 * Calculate RV registration fees by state
 * @param stateCode - Two-letter state code
 * @param vehicleValue - Purchase price/value of RV
 * @param vehicleWeight - Weight in pounds (optional, default 15000)
 * @param vehicleAge - Age in years (optional, default 0 = new)
 */
export function calculateRVRegistrationFee(
  stateCode: string,
  vehicleValue: number,
  vehicleWeight: number = 15000,
  vehicleAge: number = 0
): RegistrationFeeResult {
  const state = stateCode.toUpperCase();
  
  switch (state) {
    case 'AL': // Alabama - Weight-based
      return calculateAlabamaFees(vehicleWeight);
    
    case 'AK': // Alaska - Flat fee
      return {
        registrationFee: 100,
        titleFee: 15,
        plateFee: 5,
        docFee: 0,
        totalFees: 120,
        breakdown: ['Registration: $100', 'Title Fee: $15', 'Plate Fee: $5'],
      };
    
    case 'AZ': // Arizona - Value-based (VLT)
      return calculateArizonaFees(vehicleValue, vehicleAge);
    
    case 'AR': // Arkansas - Weight-based
      return calculateArkansasFees(vehicleWeight);
    
    case 'CA': // California - Complex (value, weight, location)
      return calculateCaliforniaFees(vehicleValue);
    
    case 'CO': // Colorado - Value and age-based
      return calculateColoradoFees(vehicleValue, vehicleAge);
    
    case 'CT': // Connecticut - Flat fees
      return {
        registrationFee: 112.50,
        titleFee: 25,
        plateFee: 5,
        docFee: 40, // Clean Air + Greenhouse Gas + Admin
        totalFees: 182.50,
        breakdown: ['Registration: $112.50', 'Title: $25', 'Plate: $5', 'Environmental Fees: $40'],
      };
    
    case 'DE': // Delaware - Weight-based
      return calculateDelawareFees(vehicleWeight);
    
    case 'FL': // Florida - Flat + weight
      return calculateFloridaFees(vehicleWeight);
    
    case 'GA': // Georgia - TAVT (Title Ad Valorem Tax) 6.6%
      return calculateGeorgiaFees(vehicleValue);
    
    case 'ID': // Idaho - Value-based
      return calculateIdahoFees(vehicleValue);
    
    case 'IL': // Illinois - Weight-based
      return calculateIllinoisFees(vehicleWeight);
    
    case 'IN': // Indiana - Flat fee + taxes
      return {
        registrationFee: 29.35,
        titleFee: 15,
        plateFee: 0,
        docFee: 0,
        totalFees: 44.35,
        breakdown: ['Registration: $29.35', 'Title: $15'],
        notes: 'Plus county excise tax (varies)',
      };
    
    case 'IA': // Iowa - Class and value-based
      return calculateIowaFees(vehicleValue);
    
    case 'KS': // Kansas - County-dependent
      return {
        registrationFee: 35,
        titleFee: 10,
        plateFee: 0,
        docFee: 0,
        totalFees: 45,
        breakdown: ['Registration: $35 (estimate)', 'Title: $10'],
        notes: 'Actual fee varies by county',
      };
    
    case 'KY': // Kentucky - County-dependent
      return {
        registrationFee: 21,
        titleFee: 9,
        plateFee: 0,
        docFee: 0,
        totalFees: 30,
        breakdown: ['Registration: $21 (estimate)', 'Title: $9'],
        notes: 'Actual fee varies by county',
      };
    
    case 'LA': // Louisiana - Flat fees
      return {
        registrationFee: 50,
        titleFee: 68.50,
        plateFee: 0,
        docFee: 8,
        totalFees: 126.50,
        breakdown: ['Registration: $50', 'Title: $68.50', 'Handling: $8'],
      };
    
    case 'ME': // Maine - Weight-based
      return {
        registrationFee: vehicleWeight <= 2000 ? 21 : 40,
        titleFee: 33,
        plateFee: 0,
        docFee: 0,
        totalFees: vehicleWeight <= 2000 ? 54 : 73,
        breakdown: [
          `Registration: $${vehicleWeight <= 2000 ? '21' : '40'}`,
          'Title: $33',
        ],
      };
    
    case 'MD': // Maryland - Weight-based
      return calculateMarylandFees(vehicleWeight);
    
    case 'MA': // Massachusetts - Flat fee
      return {
        registrationFee: 50,
        titleFee: 75,
        plateFee: 0,
        docFee: 0,
        totalFees: 125,
        breakdown: ['Registration: $50', 'Title: $75'],
      };
    
    case 'MI': // Michigan - Value-based
      return calculateMichiganFees(vehicleValue);
    
    case 'MN': // Minnesota - Value and age-based
      return calculateMinnesotaFees(vehicleValue, vehicleAge);
    
    case 'MS': // Mississippi - Value-based
      return {
        registrationFee: 12.75,
        titleFee: 0,
        plateFee: 0,
        docFee: 0,
        totalFees: 12.75,
        breakdown: ['Registration: $12.75'],
        notes: 'Plus ad valorem tax (varies by county)',
      };
    
    case 'MO': // Missouri - Flat fee
      return {
        registrationFee: 32.25,
        titleFee: 11,
        plateFee: 0,
        docFee: 6,
        totalFees: 49.25,
        breakdown: ['Registration: $32.25', 'Title: $11', 'Processing: $6/year'],
      };
    
    case 'MT': // Montana - Age-based
      return calculateMontanaFees(vehicleAge);
    
    case 'NE': // Nebraska - Flat + motor vehicle fee
      return {
        registrationFee: 23.80,
        titleFee: 10,
        plateFee: 0,
        docFee: 0,
        totalFees: 33.80,
        breakdown: ['Registration: $23.80', 'Title: $10'],
        notes: 'Plus motor vehicle tax (varies)',
      };
    
    case 'NV': // Nevada - Flat + VLT
      return {
        registrationFee: 33,
        titleFee: 28.25,
        plateFee: 0,
        docFee: 0,
        totalFees: 61.25,
        breakdown: ['Registration: $33', 'Title: $28.25'],
        notes: 'Plus governmental services tax',
      };
    
    case 'NH': // New Hampshire - Weight-based
      return {
        registrationFee: 40,
        titleFee: 25,
        plateFee: 0,
        docFee: 0,
        totalFees: 65,
        breakdown: ['Registration: $40 (estimate)', 'Title: $25'],
        notes: 'Actual fee varies by weight and municipality',
      };
    
    case 'NJ': // New Jersey - Weight and age-based
      return calculateNewJerseyFees(vehicleWeight, vehicleAge);
    
    case 'NM': // New Mexico - Flat fee
      return {
        registrationFee: 62,
        titleFee: 7,
        plateFee: 0,
        docFee: 0,
        totalFees: 69,
        breakdown: ['Registration: $62 (1 year)', 'Title: $7'],
      };
    
    case 'NY': // New York - Weight-based
      return calculateNewYorkFees(vehicleWeight);
    
    case 'NC': // North Carolina - Flat fee + HUT
      return {
        registrationFee: 38.75,
        titleFee: 52,
        plateFee: 0,
        docFee: 0,
        totalFees: 90.75,
        breakdown: ['Registration: $38.75', 'Title: $52'],
        notes: 'Plus Highway Use Tax (3% of value)',
      };
    
    case 'ND': // North Dakota - Age and weight-based
      return calculateNorthDakotaFees(vehicleWeight, vehicleAge);
    
    case 'OH': // Ohio - Flat fee
      return {
        registrationFee: 46,
        titleFee: 15,
        plateFee: 0,
        docFee: 0,
        totalFees: 61,
        breakdown: ['Registration: $46', 'Title: $15'],
      };
    
    case 'OK': // Oklahoma - Flat fee
      return {
        registrationFee: 96,
        titleFee: 11,
        plateFee: 0,
        docFee: 0,
        totalFees: 107,
        breakdown: ['Registration: $96', 'Title: $11'],
        notes: 'Plus excise tax if applicable',
      };
    
    case 'OR': // Oregon - Length and mileage-based
      return {
        registrationFee: 122,
        titleFee: 98,
        plateFee: 0,
        docFee: 0,
        totalFees: 220,
        breakdown: ['Registration: $122 (estimate)', 'Title: $98'],
        notes: 'Varies by length and MPG',
      };
    
    case 'PA': // Pennsylvania - Weight-based
      return {
        registrationFee: 48,
        titleFee: 51,
        plateFee: 0,
        docFee: 0,
        totalFees: 99,
        breakdown: ['Registration: $48 (estimate)', 'Title: $51'],
        notes: 'Varies by weight',
      };
    
    case 'RI': // Rhode Island - Weight-based
      return {
        registrationFee: 66,
        titleFee: 50,
        plateFee: 0,
        docFee: 0,
        totalFees: 116,
        breakdown: ['Registration: $66 (estimate)', 'Title: $50'],
      };
    
    case 'SC': // South Carolina - Flat fee
      return {
        registrationFee: 40,
        titleFee: 15,
        plateFee: 0,
        docFee: 0,
        totalFees: 55,
        breakdown: ['Registration: $40', 'Title: $15'],
      };
    
    case 'SD': // South Dakota - Age and weight-based
      return calculateSouthDakotaFees(vehicleWeight, vehicleAge);
    
    case 'TN': // Tennessee - Flat fee
      return {
        registrationFee: 26.50,
        titleFee: 14.50,
        plateFee: 0,
        docFee: 0,
        totalFees: 41,
        breakdown: ['Registration: $26.50', 'Title: $14.50'],
        notes: 'May vary by county',
      };
    
    case 'TX': // Texas - Flat fee
      return {
        registrationFee: 51.75,
        titleFee: 33,
        plateFee: 0,
        docFee: 0,
        totalFees: 84.75,
        breakdown: ['Registration: $51.75', 'Title: $33'],
        notes: 'Plus county fees (varies)',
      };
    
    case 'UT': // Utah - Value and age-based
      return calculateUtahFees(vehicleValue, vehicleAge);
    
    case 'VT': // Vermont - Flat fee
      return {
        registrationFee: 80,
        titleFee: 39,
        plateFee: 0,
        docFee: 0,
        totalFees: 119,
        breakdown: ['Registration: $80', 'Title: $39'],
      };
    
    case 'VA': // Virginia - Flat fee
      return {
        registrationFee: 33.75,
        titleFee: 10,
        plateFee: 0,
        docFee: 0,
        totalFees: 43.75,
        breakdown: ['Registration: $33.75', 'Title: $10'],
      };
    
    case 'WA': // Washington - Type-based
      return {
        registrationFee: 85,
        titleFee: 15,
        plateFee: 0,
        docFee: 0,
        totalFees: 100,
        breakdown: ['Registration: $85 (estimate)', 'Title: $15'],
      };
    
    case 'WV': // West Virginia - Flat fee
      return {
        registrationFee: 76.50,
        titleFee: 15,
        plateFee: 0,
        docFee: 0,
        totalFees: 91.50,
        breakdown: ['Registration: $76.50', 'Title: $15'],
      };
    
    case 'WI': // Wisconsin - Weight-based
      return calculateWisconsinFees(vehicleWeight);
    
    case 'WY': // Wyoming - Value-based
      return calculateWyomingFees(vehicleValue);
    
    case 'DC': // District of Columbia
      return {
        registrationFee: 72,
        titleFee: 26,
        plateFee: 0,
        docFee: 0,
        totalFees: 98,
        breakdown: ['Registration: $72', 'Title: $26'],
      };
    
    default:
      // Default estimate
      return {
        registrationFee: 75,
        titleFee: 25,
        plateFee: 0,
        docFee: 0,
        totalFees: 100,
        breakdown: ['Registration: $75 (estimate)', 'Title: $25 (estimate)'],
        notes: 'State-specific calculation not available',
      };
  }
}

// State-specific calculators

function calculateAlabamaFees(weight: number): RegistrationFeeResult {
  let regFee = 23; // Base for < 8,000 lbs
  if (weight > 80000) regFee = 890;
  else if (weight > 60000) regFee = 715;
  else if (weight > 40000) regFee = 490;
  else if (weight > 26000) regFee = 315;
  else if (weight > 12000) regFee = 140;
  else if (weight >= 8000) regFee = 58;
  
  return {
    registrationFee: regFee,
    titleFee: 18,
    plateFee: 23,
    docFee: 0,
    totalFees: regFee + 18 + 23,
    breakdown: [`Registration: $${regFee}`, 'Title: $18', 'Plate: $23'],
  };
}

function calculateArizonaFees(value: number, age: number): RegistrationFeeResult {
  // VLT (Vehicle License Tax) - depreciates 16.25% per year
  const depreciationRate = 0.1625;
  const assessedValue = value * Math.pow(1 - depreciationRate, age);
  const vlt = assessedValue * 0.0260; // 2.60% of assessed value (2026 rate)
  
  return {
    registrationFee: 13.50,
    titleFee: 4,
    plateFee: 0,
    docFee: vlt,
    totalFees: 13.50 + 4 + vlt,
    breakdown: [
      'Registration: $13.50',
      'Title: $4',
      `Vehicle License Tax (VLT): $${vlt.toFixed(2)}`,
    ],
  };
}

function calculateArkansasFees(weight: number): RegistrationFeeResult {
  let regFee = 17;
  if (weight > 4500) regFee = 30;
  else if (weight > 3000) regFee = 25;
  
  return {
    registrationFee: regFee,
    titleFee: 10,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 10,
    breakdown: [`Registration: $${regFee}`, 'Title: $10'],
  };
}

function calculateCaliforniaFees(value: number): RegistrationFeeResult {
  // VLF = 0.65% of market value
  const vlf = value * 0.0065;
  const regFee = 60; // Base registration fee
  const chpFee = 29; // California Highway Patrol fee
  const tifFee = value > 0 && value <= 4999 ? 25 : value >= 5000 && value <= 24999 ? 50 : value >= 25000 && value <= 34999 ? 100 : value >= 35000 && value <= 59999 ? 150 : 175; // Transportation Improvement Fee
  
  return {
    registrationFee: regFee,
    titleFee: 15,
    plateFee: 0,
    docFee: vlf + chpFee + tifFee,
    totalFees: regFee + 15 + vlf + chpFee + tifFee,
    breakdown: [
      `Registration: $${regFee}`,
      'Title: $15',
      `VLF (0.65%): $${vlf.toFixed(2)}`,
      `CHP Fee: $${chpFee}`,
      `TIF: $${tifFee}`,
    ],
  };
}

function calculateColoradoFees(value: number, age: number): RegistrationFeeResult {
  // Complex formula - simplified estimate
  const ownershipTax = value * 0.02; // Simplified 2% ownership tax
  
  return {
    registrationFee: 30,
    titleFee: 7.20,
    plateFee: 0,
    docFee: ownershipTax,
    totalFees: 30 + 7.20 + ownershipTax,
    breakdown: [
      'Registration: $30',
      'Title: $7.20',
      `Ownership Tax (estimate): $${ownershipTax.toFixed(2)}`,
    ],
  };
}

function calculateDelawareFees(weight: number): RegistrationFeeResult {
  let regFee = 40;
  if (weight > 5000) {
    const excess = Math.ceil((weight - 5000) / 1000);
    regFee = 40 + (excess * 6.40);
  }
  
  return {
    registrationFee: regFee,
    titleFee: 35,
    plateFee: 40,
    docFee: 0,
    totalFees: regFee + 35 + 40,
    breakdown: [`Registration: $${regFee.toFixed(2)}`, 'Title: $35', 'Plate: $40'],
  };
}

function calculateFloridaFees(weight: number): RegistrationFeeResult {
  // Initial registration + weight fee
  const initialFee = 225;
  const plateFee = 28;
  let weightFee = 14.50; // Base
  if (weight > 5000) weightFee = 27.60;
  if (weight > 6000) weightFee = 42.20;
  
  return {
    registrationFee: initialFee,
    titleFee: 77.25,
    plateFee: plateFee,
    docFee: weightFee,
    totalFees: initialFee + 77.25 + plateFee + weightFee,
    breakdown: [
      `Registration: $${initialFee}`,
      'Title: $77.25',
      `Plate: $${plateFee}`,
      `Weight Fee: $${weightFee}`,
    ],
  };
}

function calculateGeorgiaFees(value: number): RegistrationFeeResult {
  // TAVT (Title Ad Valorem Tax) = 6.6% of fair market value
  const tavt = value * 0.066;
  
  return {
    registrationFee: 20,
    titleFee: 18,
    plateFee: 0,
    docFee: tavt,
    totalFees: 20 + 18 + tavt,
    breakdown: [
      'Registration: $20',
      'Title: $18',
      `TAVT (6.6%): $${tavt.toFixed(2)}`,
    ],
  };
}

function calculateIdahoFees(value: number): RegistrationFeeResult {
  // Motorhome value = 25-60% of full value depending on type (using 40% avg)
  const assessedValue = value * 0.40;
  const fee = 8.50 + (Math.floor(assessedValue / 1000) * 5);
  
  return {
    registrationFee: fee,
    titleFee: 14,
    plateFee: 0,
    docFee: 0,
    totalFees: fee + 14,
    breakdown: [`Registration: $${fee.toFixed(2)}`, 'Title: $14'],
  };
}

function calculateIllinoisFees(weight: number): RegistrationFeeResult {
  const regFee = weight < 8000 ? 78 : weight < 12000 ? 90 : 102;
  
  return {
    registrationFee: regFee,
    titleFee: 150,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 150,
    breakdown: [`Registration: $${regFee}`, 'Title: $150'],
  };
}

function calculateIowaFees(value: number): RegistrationFeeResult {
  // Class A motorhome - value-based
  const regFee = Math.min(400, 85 + (value * 0.0015));
  
  return {
    registrationFee: regFee,
    titleFee: 25,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 25,
    breakdown: [`Registration: $${regFee.toFixed(2)}`, 'Title: $25'],
  };
}

function calculateMarylandFees(weight: number): RegistrationFeeResult {
  const regFee = weight < 3700 ? 135 : 187;
  
  return {
    registrationFee: regFee,
    titleFee: 100,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 100,
    breakdown: [`Registration: $${regFee}`, 'Title: $100'],
  };
}

function calculateMichiganFees(value: number): RegistrationFeeResult {
  // Based on MSRP - complex formula, simplified estimate
  const regFee = value * 0.003; // 0.3% estimate
  
  return {
    registrationFee: regFee,
    titleFee: 15,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 15,
    breakdown: [`Registration: $${regFee.toFixed(2)}`, 'Title: $15'],
  };
}

function calculateMinnesotaFees(value: number, age: number): RegistrationFeeResult {
  // Registration tax based on value and age
  const baseFee = 15.50;
  const regTax = value * 0.0125 * Math.max(0.10, 1 - (age * 0.10)); // Simplified
  
  return {
    registrationFee: baseFee,
    titleFee: 11,
    plateFee: 0,
    docFee: regTax,
    totalFees: baseFee + 11 + regTax,
    breakdown: [
      `Registration: $${baseFee}`,
      'Title: $11',
      `Registration Tax: $${regTax.toFixed(2)}`,
    ],
  };
}

function calculateMontanaFees(age: number): RegistrationFeeResult {
  let regFee = 282.50; // < 2 years
  if (age >= 11) regFee = 237.50; // Permanent
  else if (age >= 8) regFee = 97.50;
  else if (age >= 5) regFee = 132.50;
  else if (age >= 2) regFee = 224.25;
  
  return {
    registrationFee: regFee,
    titleFee: 10.21,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 10.21,
    breakdown: [`Registration: $${regFee}`, 'Title: $10.21'],
  };
}

function calculateNewJerseyFees(weight: number, age: number): RegistrationFeeResult {
  // Range $35.50 to $84 based on weight and age
  let regFee = 35.50;
  if (weight > 10000 || age < 3) regFee = 84;
  else if (weight > 7000 || age < 6) regFee = 59.50;
  
  return {
    registrationFee: regFee,
    titleFee: 60,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 60,
    breakdown: [`Registration: $${regFee}`, 'Title: $60'],
  };
}

function calculateNewYorkFees(weight: number): RegistrationFeeResult {
  // Weight-based, varies by location
  const regFee = weight < 8500 ? 40 : weight < 11000 ? 60 : 80;
  
  return {
    registrationFee: regFee,
    titleFee: 50,
    plateFee: 25,
    docFee: 0,
    totalFees: regFee + 50 + 25,
    breakdown: [`Registration: $${regFee}`, 'Title: $50', 'Plate: $25'],
  };
}

function calculateNorthDakotaFees(weight: number, age: number): RegistrationFeeResult {
  // Age and weight-based
  let regFee = 50;
  if (age < 4 && weight > 8000) regFee = 120;
  else if (age < 8 && weight > 10000) regFee = 85;
  
  return {
    registrationFee: regFee,
    titleFee: 5,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 5,
    breakdown: [`Registration: $${regFee}`, 'Title: $5'],
  };
}

function calculateSouthDakotaFees(weight: number, age: number): RegistrationFeeResult {
  // Age and weight-based
  let regFee = 70;
  if (age < 3) regFee = 120;
  else if (age < 6) regFee = 95;
  
  if (weight > 12000) regFee *= 1.2;
  
  return {
    registrationFee: regFee,
    titleFee: 10,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 10,
    breakdown: [`Registration: $${regFee.toFixed(2)}`, 'Title: $10'],
  };
}

function calculateUtahFees(value: number, age: number): RegistrationFeeResult {
  // Age-based percentage of value
  const ageFactors = [0.70, 0.65, 0.60, 0.55, 0.50, 0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15, 0.10];
  const factor = age < ageFactors.length ? ageFactors[age] : 0.10;
  const uniformFee = value * factor * 0.015; // 1.5% of age-adjusted value
  
  return {
    registrationFee: uniformFee,
    titleFee: 18,
    plateFee: 0,
    docFee: 0,
    totalFees: uniformFee + 18,
    breakdown: [`Registration: $${uniformFee.toFixed(2)}`, 'Title: $18'],
  };
}

function calculateWisconsinFees(weight: number): RegistrationFeeResult {
  const regFee = weight < 8000 ? 50 : weight < 10000 ? 58 : 85;
  
  return {
    registrationFee: regFee,
    titleFee: 69.50,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 69.50,
    breakdown: [`Registration: $${regFee}`, 'Title: $69.50'],
  };
}

function calculateWyomingFees(value: number): RegistrationFeeResult {
  // Value-based
  const regFee = value * 0.008; // Simplified 0.8%
  
  return {
    registrationFee: regFee,
    titleFee: 30,
    plateFee: 0,
    docFee: 0,
    totalFees: regFee + 30,
    breakdown: [`Registration: $${regFee.toFixed(2)}`, 'Title: $30'],
  };
}
