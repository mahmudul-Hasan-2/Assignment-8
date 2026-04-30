import React from "react";

const Guide = () => {
  const guides = [
    {
      title: "Animal Selection Rules",
      content:
        "The animal must be healthy and free from physical defects. It must meet the minimum age requirement (2 years for cattle, 1 year for goats/sheep) and should not be significantly lean or weak.",
    },
    {
      title: "Proper Timing",
      content:
        "Kurbani can be performed starting from after the Eid-ul-Adha prayer until sunset on the 12th day of Dhul-Hijjah. Performing it on the first day is considered most virtuous.",
    },
    {
      title: "Meat Distribution",
      content:
        "It is Sunnah to divide the meat into three parts: one for yourself and your family, one for relatives and friends, and one for the poor and needy.",
    },
    {
      title: "Environmental Responsibility",
      content:
        "Dispose of animal waste in designated areas. Clean the slaughtering spot thoroughly with water and apply bleaching powder or disinfectant to maintain hygiene.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Kurbani Guide & Regulations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ensure your sacrifice is performed correctly by following these
            essential guidelines, covering everything from selection to waste
            management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-green-700 mb-2">
                Age Verification
              </h3>
              <p className="text-sm text-gray-600">
                Cattle must be at least 2 years old, while goats and sheep must
                be at least 1 year old.
              </p>
            </div>
            <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-blue-700 mb-2">
                Teeth Check
              </h3>
              <p className="text-sm text-gray-600">
                Ensure the animal is mature by checking for two permanent
                incisor teeth on the lower jaw.
              </p>
            </div>
            <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-amber-700 mb-2">
                Health Inspection
              </h3>
              <p className="text-sm text-gray-600">
                The animal should not be blind, lame, or excessively thin. It
                must be active and alert.
              </p>
            </div>
            <div className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-purple-700 mb-2">
                Intention (Niyyah)
              </h3>
              <p className="text-sm text-gray-600">
                The sacrifice must be made with the sole intention of pleasing
                Allah (SWT).
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {guides.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200">
                <input
                  type="radio"
                  name="kurbani-accordion"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-medium">
                  {item.title}
                </div>
                <div className="collapse-content text-gray-600">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
