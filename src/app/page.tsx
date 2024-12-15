import { Button } from "@/components/ui/button"
import React from 'react';

import { MessageCircle, Heart, Clock, Lock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (




    

 

    <div className="container mx-auto">
      
	<div className="text-center mb-16 px-4">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">
          	We hear you!
           </h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          	We understand the impact of unspoken emotions on mental and physical well-being 
          	and aim to break down barriers by offering a confidential space for open conversations. 
          	Let&apos;s lighten your emotional load together!
           </p>
           <Link href="/packages">
             <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            	<MessageCircle className="mr-2 h-5 w-5" />
            	   Chat Now
            </Button>
          </Link>
        </div>





      <div className="grid grid-cols-1 gap-8 mb-16 px-4">



      {/* Feature Sections */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-16">
	
	{/* Human Connection */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Human Connection</h2>
          <p className="text-gray-600">
            Real human support, no chatbots. Available in three languages.
          </p>
        </div>



	
        {/* Easy Access */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Easy Access</h2>
          <p className="text-gray-600">
            Chat anytime between 11:00 hrs to 19:00 hrs. No appointments needed.
          </p>
        </div>



         {/* Complete Privacy */}
          <div className="text-center">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Lock className="text-blue-600" size={24} />
             </div>
             <h2 className="text-2xl font-bold mb-4">Complete Privacy</h2>
          	<p className="text-gray-600">
            	    Anonymous conversations, no registration required.
          	</p>
          </div>


     </div>	

     </div>	


    </div>
  )
}