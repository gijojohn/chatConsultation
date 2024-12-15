import { Button } from "@/components/ui/button"

export default function Packages() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Anonymous Chat Consultation</h1>
        <p className="text-gray-600">Professional consultation with complete privacy</p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Choose Your Package</h2>
        <p className="text-gray-600">Select the consultation package that best suits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Basic Package */}
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Basic Consultation</h3>
          <p className="text-gray-600 mb-4">Perfect for quick questions and brief consultations</p>
          <div className="text-3xl font-bold mb-2">₹499</div>
          <p className="text-gray-600 mb-6">30 Minutes</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Package</Button>
        </div>

        {/* Standard Package */}
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Standard Consultation</h3>
          <p className="text-gray-600 mb-4">Ideal for in-depth discussions and detailed advice</p>
          <div className="text-3xl font-bold mb-2">₹899</div>
          <p className="text-gray-600 mb-6">60 Minutes</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Package</Button>
        </div>

        {/* Extended Package */}
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Extended Consultation</h3>
          <p className="text-gray-600 mb-4">Comprehensive consultation for complex matters</p>
          <div className="text-3xl font-bold mb-2">₹1599</div>
          <p className="text-gray-600 mb-6">120 Minutes</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Package</Button>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="font-semibold mb-2">Emergency Contact Numbers:</h3>
        <div className="text-gray-600">
          <p>Jeevan Aastha: 1800 233 3330</p>
          <p>1Life: 78930 78930</p>
          <p>Aasra: 9820466726</p>
          <p>Tele MANAS: 14416</p>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mb-8">
        If you are experiencing distress and have thoughts of self-harm or suicide, 
        please reach out to a mental health professional right away. 
        You are not alone and there are people who want to help!
      </div>
    </div>
  )
}