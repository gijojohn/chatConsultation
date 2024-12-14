'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ConsentFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (consents: Record<string, boolean>) => void
  selectedPackage: {
    title: string;
    price: number;
    duration: string;
  } | null
}

export default function ConsentForm({ isOpen, onClose, onSubmit, selectedPackage }: ConsentFormProps) {
  const [consents, setConsents] = useState({
    anonymity: false,
    terms: false,
    dataPolicy: false,
  })

  const handleConsentChange = (key: keyof typeof consents) => {
    setConsents(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSubmit = () => {
    onSubmit(consents)
    onClose()
  }

  const allConsentsGiven = Object.values(consents).every(Boolean)

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
              <div className="px-6 py-4 border-b sticky top-0 z-10">
                <h2 className="text-lg font-semibold">Consent Form</h2>
              </div>
              <div className="px-6 py-4 space-y-4">
                {selectedPackage && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Selected Package:</h4>
                    <p className="font-medium text-lg">{selectedPackage.title}</p>
                    <p className="text-gray-600">Duration: {selectedPackage.duration}</p>
                    <p className="text-gray-600">Price: ₹{selectedPackage.price}</p>
                  </div>
                )}
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="anonymity" 
                    checked={consents.anonymity}
                    onCheckedChange={() => handleConsentChange('anonymity')}
                  />
                  <label htmlFor="anonymity" className="text-sm leading-tight">
                    I understand that while my chat will be anonymous, payment gateway will collect necessary transaction details.
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms" 
                    checked={consents.terms}
                    onCheckedChange={() => handleConsentChange('terms')}
                  />
                  <label htmlFor="terms" className="text-sm leading-tight">
                    I agree to the terms of service, including the chat duration limits and extension policies.
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="dataPolicy" 
                    checked={consents.dataPolicy}
                    onCheckedChange={() => handleConsentChange('dataPolicy')}
                  />
                  <label htmlFor="dataPolicy" className="text-sm leading-tight">
                    I understand that chat records will be maintained securely for quality and record purposes.
                  </label>
                </div>
              </div>
              <div className="bg-white px-6 py-4 border-t sticky bottom-0">
                <div className="flex justify-end space-x-3 w-full">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!allConsentsGiven}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

