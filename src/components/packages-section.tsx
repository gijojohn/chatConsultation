'use client';

import './packages.css';
import React, { useState } from 'react';
import ConsentForm from './consent-form';

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
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof PACKAGES[0] | null>(null);
  const [consents, setConsents] = useState<Record<string, boolean>>({});

  const handlePackageSelect = (packageId: number) => {
    const selected = PACKAGES.find(pkg => pkg.id === packageId);
    setSelectedPackage(selected || null);
    setShowConsentForm(true);
  };

  const handleConsentClose = () => {
    setShowConsentForm(false);
    setSelectedPackage(null);
  };

  const handleProceedToPayment = () => {
    console.log('Proceeding to payment for package:', selectedPackage);
    // Will add payment integration here later
    handleConsentClose();
  };

  const handleConsentSubmit = (consents: Record<string, boolean>) => {
    setConsents(consents);
    console.log('Consents submitted:', consents);
  };

  return (
    <section className="py-12 px-4 text-center w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Package</h2>
        <p className="text-gray-600 text-center">
          Select the consultation package that best suits your needs
        </p>
      </div>
      
      <div className="packages-grid gap-8">
        {PACKAGES.map((pkg, index) => (
          <div
            key={pkg.id}
            className="package-card text-center bg-white rounded-lg shadow-lg p-6 mb-8 md:mb-0"
          >
            <h3 className="package-title text-center">{pkg.title}</h3>
            <p className="package-description text-center">{pkg.description}</p>
            <div className="package-price text-center">₹{pkg.price}</div>
            <div className="package-duration text-center">{pkg.duration}</div>
            <button 
              className="package-button text-center"
              onClick={() => handlePackageSelect(pkg.id)}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>

      <ConsentForm
        isOpen={showConsentForm}
        onClose={handleConsentClose}
        selectedPackage={selectedPackage}
        onProceedToPayment={handleProceedToPayment}
        onSubmit={handleConsentSubmit}
      />
    </section>
  );
}