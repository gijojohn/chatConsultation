'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function EmergencyContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <Button 
            variant="ghost" 
            className="flex items-center text-red-600 hover:text-red-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <AlertCircle className="w-5 h-5 mr-2" />
            24x7 Suicide Prevention Hotlines
            <span className="ml-2 text-sm">
              {isExpanded ? '(Click to collapse)' : '(Click to expand)'}
            </span>
          </Button>
        </div>
        
        {isExpanded && (
          <div className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold">Emergency Contact Numbers:</p>
              <div className="grid grid-cols-2 gap-2">
                <p>Jeevan Aastha: 1800 233 3330</p>
                <p>1Life: 78930 78930</p>
                <p>Aasra: 9820466726</p>
                <p>Tele MANAS: 14416</p>
              </div>
            </div>
            <div>
              <p className="text-red-600">
                If you are experiencing distress and have thoughts of self-harm or suicide, 
                please reach out to a mental health professional right away. 
                You are not alone and there are people who want to help!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}