import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <nav>
      <div className="max-w-sm">
        <h2 className="text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          If you have any questions regarding your preferred animal, feel free
          to contact us directly. We are dedicated to serving you 24/7.
        </p>

        <div className="space-y-6 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <FaWhatsapp size={24} />
            </div>
            <div>
              <h4 className="font-bold">WhatsApp</h4>
              <p className="text-sm">+880 1234 567890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-sm">support@qurbanihat.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 className="font-bold">Office</h4>
              <p className="text-sm">Bogura, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ContactUs;
