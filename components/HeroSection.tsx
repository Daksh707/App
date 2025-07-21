
'use client';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-6 px-4">
      <div className="relative rounded-3xl overflow-hidden mb-6 shadow-xl">
  <img 
    src="/shop.jpeg" // Assuming you place your uploaded shop.jpeg in your public folder
    alt="Kansal Electric Store"
    className="w-full h-60 object-cover object-top"
  />
</div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
          <div className="p-6 text-white w-full">
            <h2 className="text-2xl font-bold mb-2 text-shadow-lg">Premium Electrical Products</h2>
            <p className="text-base opacity-95 mb-4">Authorized dealer for India's top electrical brands</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <i className="ri-star-fill text-yellow-400 text-sm"></i>
                <span className="text-sm font-medium">4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-fill text-green-400 text-sm"></i>
                <span className="text-sm font-medium">Genuine Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Welcome to Kansal Electrical</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your trusted partner for all electrical needs. We provide premium quality products from India's most trusted brands with expert guidance and competitive prices.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-award-line text-blue-600 text-xl"></i>
              </div>
              <p className="text-xs font-medium text-gray-700">Quality Assured</p>
            </div>
            <div className="p-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-customer-service-line text-green-600 text-xl"></i>
              </div>
              <p className="text-xs font-medium text-gray-700">Expert Support</p>
            </div>
            <div className="p-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-truck-line text-red-600 text-xl"></i>
              </div>
                <p className="text-xs font-medium text-gray-700">Instore Purchase</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
