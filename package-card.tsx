import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PackageProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  onSelect: () => void;
}

export function PackageCard({ 
  title, 
  description, 
  price, 
  duration, 
  onSelect 
}: PackageProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">{description}</p>
          <div className="text-3xl font-bold">₹{price}</div>
          <div className="text-sm text-gray-500">{duration}</div>
          <Button 
            onClick={onSelect}
            className="w-full"
          >
            Select Package
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}