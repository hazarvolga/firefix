export type BusinessType = 
  | 'cafe_restaurant' 
  | 'factory_warehouse' 
  | 'hotel_lodging' 
  | 'school_nursery' 
  | 'office_plaza' 
  | 'retail_store';

export interface CalculationInput {
  businessType: BusinessType;
  areaSqm: number;
  floorCount: number;
  occupantCapacity: number;
  hasGasOrChemicals: boolean;
}

export interface CalculationResult {
  riskGrade: 'Düşük Tehlike' | 'Orta Tehlike' | 'Yüksek Tehlike';
  requiredExtinguishers: number;
  co2Extinguishers: number;
  requiresSprinkler: boolean;
  requiresFireCabinet: boolean;
  requiredExitDoors: number;
  requiresSmokeExtraction: boolean;
  estimatedApprovalDays: number;
  checklistSummary: string[];
}

export function calculateFireCompliance(input: CalculationInput): CalculationResult {
  const { businessType, areaSqm, floorCount, occupantCapacity, hasGasOrChemicals } = input;

  // 1. Risk Grade
  let riskGrade: 'Düşük Tehlike' | 'Orta Tehlike' | 'Yüksek Tehlike' = 'Düşük Tehlike';
  if (businessType === 'factory_warehouse' || hasGasOrChemicals || areaSqm > 1500) {
    riskGrade = 'Yüksek Tehlike';
  } else if (businessType === 'cafe_restaurant' || businessType === 'hotel_lodging' || areaSqm > 400 || floorCount >= 3) {
    riskGrade = 'Orta Tehlike';
  }

  // 2. Extinguishers (1 per 250 sqm, min 2 for commercial)
  let kktExtinguishers = Math.max(2, Math.ceil(areaSqm / 250));
  if (riskGrade === 'Yüksek Tehlike') {
    kktExtinguishers = Math.max(4, Math.ceil(areaSqm / 200));
  }

  // CO2 extinguishers for electrical / kitchen
  let co2Extinguishers = 1;
  if (businessType === 'cafe_restaurant' || businessType === 'factory_warehouse' || areaSqm > 500) {
    co2Extinguishers = 2;
  }
  if (areaSqm > 1500) {
    co2Extinguishers = 4;
  }

  // 3. Sprinkler necessity (BYKHY standards: >2000m² or >4 floors or high hazard factory >1000m²)
  const requiresSprinkler = areaSqm >= 2000 || floorCount >= 5 || (businessType === 'factory_warehouse' && areaSqm >= 1000);

  // 4. Fire Cabinet (BYKHY: >400m² or >=2 floors)
  const requiresFireCabinet = areaSqm >= 400 || floorCount >= 2 || businessType === 'factory_warehouse';

  // 5. Emergency Exit Doors (>50 occupants or >400m² requires at least 2)
  let requiredExitDoors = 1;
  if (occupantCapacity >= 50 || areaSqm >= 400 || floorCount >= 3) {
    requiredExitDoors = 2;
  }
  if (occupantCapacity >= 250 || areaSqm >= 1500) {
    requiredExitDoors = 3;
  }

  // 6. Smoke extraction (>1000m² or basement operations)
  const requiresSmokeExtraction = areaSqm >= 1000 || (businessType === 'cafe_restaurant' && hasGasOrChemicals && areaSqm >= 300);

  // 7. Estimated Approval Days
  let estimatedApprovalDays = 7;
  if (riskGrade === 'Orta Tehlike') estimatedApprovalDays = 10;
  if (riskGrade === 'Yüksek Tehlike' || requiresSprinkler) estimatedApprovalDays = 14;

  // Checklist
  const checklistSummary: string[] = [
    `Minimum ${kktExtinguishers} adet 6kg KKT (Kuru Kimyevi Tozlu) TSE belgeli yangın söndürme tüpü`,
    `Elektrik panoları ve cihazlar için ${co2Extinguishers} adet 5kg CO2 yangın tüpü`,
    `${requiredExitDoors} adet dışa açılan panik barlı yangın tahliye kapısı`,
    'Tüm kaçış yollarında kesintisiz fotolümenli acil durum ÇIKIŞ levhaları',
    '3 saat batarya korumalı acil aydınlatma armatürleri',
  ];

  if (requiresFireCabinet) {
    checklistSummary.push('Duvar tipi sulu yangın dolabı tesisatı ve lans takımı');
  }
  if (requiresSprinkler) {
    checklistSummary.push('Otomatik sulu sprinkler (yağmurlama) söndürme tesisat projesi ve uygulaması');
  }
  if (requiresSmokeExtraction) {
    checklistSummary.push('Mekanik duman tahliye fanları ve havalandırma kanalları');
  }

  return {
    riskGrade,
    requiredExtinguishers: kktExtinguishers,
    co2Extinguishers,
    requiresSprinkler,
    requiresFireCabinet,
    requiredExitDoors,
    requiresSmokeExtraction,
    estimatedApprovalDays,
    checklistSummary,
  };
}
