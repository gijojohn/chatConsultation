'use client';

import React from 'react';
import { PackageCard } from './package-card';

const PACKAGES = [
  {
    id: 1,
    title: 'Basic Consultation',
    description: 'Perfect for quick questions and brief consultations',
    price: 499,
    duration: '30 Minutes',
  },
  {
    id: 2,
    title: 'Standard Consultation',
    description: 'Ideal for in-depth discussions and detailed advice',
    price: 899,
    duration: '60 Minutes',
  },
  {
    id: 3,
    title: 'Extended Consultation',
    description: 'Comprehensive consultation for complex matters',
    price: 1599,
    duration: '120 Minutes',
  },
];

export function PackagesSection() {
  const handlePackageSelect = (packageId: number) => {
    console.log(`Selected package: ${packageId}`);
    // We'll implement the selection logic later
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Choose Your Package</h2>
        <p className="mt-2 text-gray-600">
          Select the consultation package that best suits your needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PACKAGES.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            duration={pkg.duration}
            onSelect={() => handlePackageSelect(pkg.id)}
          />
        ))}
      </div>
    </div>
  );
}