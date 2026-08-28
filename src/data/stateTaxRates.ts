// Average sales tax rates for vehicle/RV purchases by state (2025)
// Rates include state base rate + typical local rates
// Note: Actual rates may vary by county/city. Always verify with local DMV.

export interface StateTaxInfo {
  code: string;
  name: string;
  rate: number; // Average effective rate for vehicles
  notes?: string;
  taxOnDifference: boolean; // true = tax on (price - trade), false = tax on full price
  luxuryTax?: {
    threshold: number; // Price above which luxury tax applies
    rate: number; // Luxury tax rate
  };
}

export const STATE_TAX_RATES: StateTaxInfo[] = [
  { code: 'AL', name: 'Alabama', rate: 7.0, notes: 'Varies by county, 2-4% state + 3-4% local', taxOnDifference: true },
  { code: 'AK', name: 'Alaska', rate: 0, notes: 'No state sales tax, some local taxes may apply', taxOnDifference: true },
  { code: 'AZ', name: 'Arizona', rate: 8.0, notes: '5.6% state + county/city taxes', taxOnDifference: true },
  { code: 'AR', name: 'Arkansas', rate: 8.5, notes: '6.5% state + local taxes', taxOnDifference: true },
  { code: 'CA', name: 'California', rate: 8.5, notes: '6% state + 1.25-3% local, varies by county', taxOnDifference: false },
  { code: 'CO', name: 'Colorado', rate: 7.5, notes: '2.9% state + local taxes, varies by county', taxOnDifference: true },
  { code: 'CT', name: 'Connecticut', rate: 6.35, notes: 'Flat 6.35%, luxury vehicles >$50k at 7.75%', taxOnDifference: true, luxuryTax: { threshold: 50000, rate: 7.75 } },
  { code: 'DE', name: 'Delaware', rate: 0, notes: 'No sales tax', taxOnDifference: true },
  { code: 'FL', name: 'Florida', rate: 7.0, notes: '6% state + up to 1% local', taxOnDifference: true },
  { code: 'GA', name: 'Georgia', rate: 6.6, notes: 'TAVT: 6.6% of fair market value (one-time)', taxOnDifference: true },
  { code: 'HI', name: 'Hawaii', rate: 4.5, notes: '4% state + 0.5% county', taxOnDifference: false },
  { code: 'ID', name: 'Idaho', rate: 6.0, notes: '6% state, no local sales tax on vehicles', taxOnDifference: true },
  { code: 'IL', name: 'Illinois', rate: 7.5, notes: '6.25% state + local taxes', taxOnDifference: false },
  { code: 'IN', name: 'Indiana', rate: 7.0, notes: 'Flat 7% statewide', taxOnDifference: true },
  { code: 'IA', name: 'Iowa', rate: 7.0, notes: '6% state + up to 1% local', taxOnDifference: true },
  { code: 'KS', name: 'Kansas', rate: 8.5, notes: '6.5% state + county/city taxes', taxOnDifference: true },
  { code: 'KY', name: 'Kentucky', rate: 6.0, notes: 'Flat 6% statewide', taxOnDifference: false },
  { code: 'LA', name: 'Louisiana', rate: 9.0, notes: '4.45% state + parish/city taxes', taxOnDifference: true },
  { code: 'ME', name: 'Maine', rate: 5.5, notes: 'Flat 5.5% statewide', taxOnDifference: true },
  { code: 'MD', name: 'Maryland', rate: 6.0, notes: 'Flat 6% (electric vehicles exempt)', taxOnDifference: true },
  { code: 'MA', name: 'Massachusetts', rate: 6.25, notes: 'Flat 6.25% statewide', taxOnDifference: true },
  { code: 'MI', name: 'Michigan', rate: 6.0, notes: 'Flat 6% statewide', taxOnDifference: false },
  { code: 'MN', name: 'Minnesota', rate: 7.5, notes: '6.875% state + local taxes', taxOnDifference: true },
  { code: 'MS', name: 'Mississippi', rate: 7.5, notes: '7% state + up to 0.5% local', taxOnDifference: true },
  { code: 'MO', name: 'Missouri', rate: 7.0, notes: '4.225% state + local taxes', taxOnDifference: true },
  { code: 'MT', name: 'Montana', rate: 0, notes: 'No sales tax', taxOnDifference: true },
  { code: 'NE', name: 'Nebraska', rate: 6.5, notes: '5.5% state + up to 1.5% local', taxOnDifference: true },
  { code: 'NV', name: 'Nevada', rate: 8.25, notes: 'Varies by county, combined rate', taxOnDifference: true },
  { code: 'NH', name: 'New Hampshire', rate: 0, notes: 'No sales tax', taxOnDifference: true },
  { code: 'NJ', name: 'New Jersey', rate: 6.625, notes: 'Flat 6.625% statewide', taxOnDifference: true },
  { code: 'NM', name: 'New Mexico', rate: 7.5, notes: '5.125% state + local taxes', taxOnDifference: true },
  { code: 'NY', name: 'New York', rate: 8.0, notes: '4% state + county/city taxes', taxOnDifference: true },
  { code: 'NC', name: 'North Carolina', rate: 3.0, notes: 'Highway Use Tax: 3%', taxOnDifference: false },
  { code: 'ND', name: 'North Dakota', rate: 6.5, notes: '5% state + local taxes', taxOnDifference: true },
  { code: 'OH', name: 'Ohio', rate: 7.0, notes: '5.75% state + local taxes', taxOnDifference: true },
  { code: 'OK', name: 'Oklahoma', rate: 8.5, notes: '4.5% state + local taxes', taxOnDifference: true },
  { code: 'OR', name: 'Oregon', rate: 0, notes: 'No sales tax', taxOnDifference: true },
  { code: 'PA', name: 'Pennsylvania', rate: 6.0, notes: 'Flat 6% statewide', taxOnDifference: true },
  { code: 'RI', name: 'Rhode Island', rate: 7.0, notes: 'Flat 7% statewide', taxOnDifference: true },
  { code: 'SC', name: 'South Carolina', rate: 6.0, notes: '$500 maximum vehicle sales tax cap', taxOnDifference: true },
  { code: 'SD', name: 'South Dakota', rate: 5.0, notes: '4.5% state + local taxes', taxOnDifference: true },
  { code: 'TN', name: 'Tennessee', rate: 9.0, notes: '7% state + up to 2.75% local', taxOnDifference: true },
  { code: 'TX', name: 'Texas', rate: 6.25, notes: '6.25% state, motor vehicles capped', taxOnDifference: false },
  { code: 'UT', name: 'Utah', rate: 7.0, notes: '4.7% state + local taxes', taxOnDifference: true },
  { code: 'VT', name: 'Vermont', rate: 6.0, notes: 'Flat 6% (hybrid/EV credit available)', taxOnDifference: true },
  { code: 'VA', name: 'Virginia', rate: 5.5, notes: '4.3% state + up to 1.7% local', taxOnDifference: false },
  { code: 'WA', name: 'Washington', rate: 9.0, notes: '6.5% state + local taxes', taxOnDifference: true },
  { code: 'DC', name: 'Washington DC', rate: 6.0, notes: 'Flat 6%', taxOnDifference: true },
  { code: 'WV', name: 'West Virginia', rate: 6.5, notes: '6% state + local taxes', taxOnDifference: true },
  { code: 'WI', name: 'Wisconsin', rate: 5.5, notes: '5% state + up to 0.6% local', taxOnDifference: true },
  { code: 'WY', name: 'Wyoming', rate: 5.0, notes: '4% state + up to 1% local', taxOnDifference: true },
];

// Helper function to get state by code
export const getStateByCode = (code: string): StateTaxInfo | undefined => {
  return STATE_TAX_RATES.find(state => state.code === code);
};

// Helper function to get state by name
export const getStateByName = (name: string): StateTaxInfo | undefined => {
  return STATE_TAX_RATES.find(state => 
    state.name.toLowerCase() === name.toLowerCase()
  );
};
