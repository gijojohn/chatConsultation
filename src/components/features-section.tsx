'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Shield } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Heart className="w-12 h-12 text-blue-500" />,
      title: "Human Connection",
      description: "Real human support, no chatbots. Available in three languages."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Easy Access",
      description: "Chat anytime between 11:00 hrs to 19:00 hrs. No appointments needed."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Complete Privacy",
      description: "Anonymous conversations, no registration required."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardContent className="p-6 text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}