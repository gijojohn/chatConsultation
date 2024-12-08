'use client';

import { PackagesSection } from "@/components/packages-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="mx-auto py-12 text-center max-w-4xl"> {/* Added text-center and max-w-4xl */}
        <div className="mb-12 px-4"> {/* Added px-4 for padding on small screens */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center !important"> {/* Added text-center */}
            Anonymous Chat Consultation
          </h1>
          <p className="text-xl text-gray-600 text-center !important"> {/* Added text-center */}
            Professional consultation with complete privacy
          </p>
        </div>

        <PackagesSection />
      </div>
    </main>
  );
}