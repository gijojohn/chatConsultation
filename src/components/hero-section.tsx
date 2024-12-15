'use client';

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <div className="text-center mb-16 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        We hear you!
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        We understand the impact of unspoken emotions on mental and physical well-being 
        and aim to break down barriers by offering a confidential space for open conversations. 
        Let&apos;s lighten your emotional load together!
      </p>
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
        <MessageCircle className="mr-2 h-5 w-5" />
        Chat Now
      </Button>
    </div>
  );
}