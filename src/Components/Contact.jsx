import { useState } from 'react';
import ContactInfo from './ContactInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-[#1a0826] p-8 rounded-lg w-full max-w-2xl text-white mr-28">
        <h2 className="text-3xl font-bold text-purple-400">Let’s <span className="text-white">work together!</span></h2>
        <p className="mt-2 text-gray-300">I design and code beautifully simple things and I love what I do.</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First name" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded" required />
            <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded" required />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input type="email" name="email" placeholder="Email address" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded" required />
            <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded" required />
          </div>
          <select name="option" onChange={handleChange} className="w-full p-3 mt-4 bg-black border border-gray-700 rounded" required>
            <option value="">—Please choose an option—</option>
            <option value="webDesign">Web Design</option>
            <option value="development">Development</option>
            <option value="seo">SEO</option>
          </select>
          <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-3 mt-4 bg-black border border-gray-700 rounded h-24" required></textarea>
          <button type="submit" className="w-full mt-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded">Send Message</button>
        </form>
      </div>
      <div><ContactInfo/></div>
    </div>
  );
}
