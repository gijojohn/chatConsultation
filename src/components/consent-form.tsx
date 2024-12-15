'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface ConsentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (consents: Record<string, boolean>) => void;
  selectedPackage: {
    title: string;
    price: number;
    duration: string;
  } | null;
  onProceedToPayment?: () => void;
}

export default function ConsentForm({ 
  isOpen, 
  onClose, 
  onSubmit, 
  selectedPackage,
  onProceedToPayment 
}: ConsentFormProps) {
  const [consents, setConsents] = useState<Record<string, boolean>>({
    anonymity: false,
    terms: false,
    dataPolicy: false,
  });

  const handleConsentChange = (key: keyof typeof consents) => {
    setConsents((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    onSubmit(consents);
    onClose();
    if (onProceedToPayment) {
      onProceedToPayment();
    }
  };

  const allConsentsGiven = Object.values(consents).every(Boolean);

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 p-4"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-lg shadow-xl w-full max-w-md mt-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="px-6 py-4 border-b sticky top-0 bg-white">
              <h2 className="text-lg font-semibold">Consent Form</h2>
            </div>
            <div className="px-6 py-4 space-y-6">
              {selectedPackage && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Selected Package:</h4>
                  <p className="font-medium text-lg">{selectedPackage.title}</p>
                  <p className="text-gray-600">Duration: {selectedPackage.duration}</p>
                  <p className="text-gray-600">Price: ₹{selectedPackage.price}</p>
                </div>
              )}
              <div className="space-y-6">
                {[
                  {
                    id: 'anonymity',
                    label:
                      'I understand that while my chat will be anonymous, the payment gateway will collect necessary transaction details.',
                  },
                  {
                    id: 'terms',
                    label:
                      'I agree to the terms of service, including the chat duration limits and extension policies.',
                  },
                  {
                    id: 'dataPolicy',
                    label:
                      'I understand that chat records will be maintained securely for quality and record purposes.',
                  },
                ].map(({ id, label }) => (
                  <div className="flex items-center gap-16" key={id}>
                    <div className="flex-shrink-0">
                      <Checkbox
                        id={id}
                        checked={consents[id as keyof typeof consents]}
                        onCheckedChange={() => handleConsentChange(id as keyof typeof consents)}
                      />
                    </div>
                    <label htmlFor={id} className="text-sm">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 border-t sticky bottom-0 bg-white">
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={!allConsentsGiven}>
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}