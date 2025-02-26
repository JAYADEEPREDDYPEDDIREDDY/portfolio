import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg space-y-6 w-full">
      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
          <FaPhoneAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-semibold text-lg">+91 9390787290</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
          <FaEnvelope className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-400">Email</p>
          <p className="font-semibold text-lg">jayadeepreddypeddireddy@gmail.com</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
          <FaMapMarkerAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-400">Address</p>
          <p className="font-semibold text-lg">
           Tirupathi<br />
           Andhra Pradesh, 517502
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
