
'use client';

interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} from ${product.brand}. Can you provide more details?`;
    window.open(`https://wa.me/918427473316?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:8427473316', '_self');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Product Details</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors !rounded-button"
            >
              <i className="ri-close-line text-gray-600 text-xl"></i>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mb-6 flex items-center justify-center shadow-inner">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-blue-600 font-semibold text-lg mb-3">{product.brand}</p>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <i className="ri-star-line text-blue-600"></i>
              <span>Key Features:</span>
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl border border-green-100">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl border border-gray-100">
            <p className="text-2xl font-bold text-blue-600">{product.price}</p>
            <p className="text-sm text-gray-600 mt-1">Best competitive prices guaranteed</p>
          </div>
          
          <div className="flex space-x-3">
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
        </div>
      </div>
    </div>
  );
}
