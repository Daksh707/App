
'use client';

export default function ContactSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918427473316?text=Hello, I would like to know more about your electrical products.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:8427473316', '_self');
  };

  return (
    <section className="px-4 pb-6">
      <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 rounded-3xl p-6 shadow-xl border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600">Contact us for all your electrical needs</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-4 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="ri-phone-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-blue-600 font-bold text-lg">8427473316</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="ri-whatsapp-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-800">WhatsApp</p>
              <p className="text-green-600 font-bold">Quick Response</p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mb-6">
          <button 
            onClick={handleWhatsApp}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            <span>WhatsApp</span>
          </button>
          <button 
            onClick={handleCall}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button"
          >
            <i className="ri-phone-line text-xl"></i>
            <span>Call Now</span>
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
            <i className="ri-map-pin-line text-blue-600"></i>
            <span>Our Location</span>
          </h3>
          <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden mb-3">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d75.49940735820312!3d30.34978900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391234567890abcd%3A0x1234567890abcdef!2sBalial%20Road%2C%20Bhawanigarh%2C%20Punjab%20148026%2C%20India!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold mb-1">Kansal Electric Store</p>
            <p>Balial Road, Bhawanigarh</p>
            <p>Punjab, India - 148026</p>
          </div>
          <p className="text-sm text-gray-600 mt-3 italic">
            Visit our store for personalized assistance and product demonstrations.
          </p>
        </div>
      </div>
    </section>
  );
}
