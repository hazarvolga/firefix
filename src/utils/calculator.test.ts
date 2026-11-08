import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateFireCompliance } from './calculator';

test('low hazard small retail store calculation', () => {
  const result = calculateFireCompliance({
    businessType: 'retail_store',
    areaSqm: 120,
    floorCount: 1,
    occupantCapacity: 15,
    hasGasOrChemicals: false,
  });

  assert.equal(result.riskGrade, 'Düşük Tehlike');
  assert.equal(result.requiredExtinguishers, 2); // Min 2 for commercial
  assert.equal(result.requiresSprinkler, false);
  assert.equal(result.requiredExitDoors, 1);
  assert.equal(result.estimatedApprovalDays, 7);
});

test('high hazard large factory calculation', () => {
  const result = calculateFireCompliance({
    businessType: 'factory_warehouse',
    areaSqm: 2500,
    floorCount: 2,
    occupantCapacity: 300,
    hasGasOrChemicals: true,
  });

  assert.equal(result.riskGrade, 'Yüksek Tehlike');
  assert.equal(result.requiresSprinkler, true);
  assert.equal(result.requiresFireCabinet, true);
  assert.equal(result.requiredExitDoors, 3);
  assert.equal(result.requiresSmokeExtraction, true);
  assert.equal(result.estimatedApprovalDays, 14);
});

test('restaurant with gas lines calculation', () => {
  const result = calculateFireCompliance({
    businessType: 'cafe_restaurant',
    areaSqm: 450,
    floorCount: 2,
    occupantCapacity: 120,
    hasGasOrChemicals: true,
  });

  assert.equal(result.riskGrade, 'Yüksek Tehlike');
  assert.equal(result.requiresFireCabinet, true);
  assert.equal(result.requiredExitDoors, 2);
  assert.equal(result.co2Extinguishers, 2);
});
