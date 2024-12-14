'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Consent Form</DialogTitle>
          </DialogHeader>
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
          <DialogFooter className="bg-white px-6 py-4 border-t sticky bottom-0">
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
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}

