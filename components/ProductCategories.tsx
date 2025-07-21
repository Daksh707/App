
'use client';

import { useState } from 'react';
import ProductModal from './ProductModal';

interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

export default function ProductCategories() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'RR Kabel Wires',
      brand: 'RR Kabel',
      description: 'High-quality electrical wires and cables',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%20Realistic%20electrical%20wire%20coils%2C%20copper%20wires%20and%20cables%2C%20high-detail%203D%20rendering%2C%20prominent%20main%20subjects%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20subtle%20shadows%2C%20product%20photography%20style&width=100&height=100&seq=rr1&orientation=squarish',
      features: ['Fire Resistant', 'ISI Certified', 'Copper Conductor', 'Multiple Sizes Available']
    },
    {
      id: '2',
      name: 'Wipro Lighting',
      brand: 'Wipro',
      description: 'Energy-efficient LED lighting solutions',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20LED%20bulb%2C%20modern%20energy%20efficient%20lighting%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality&width=100&height=100&seq=wipro1&orientation=squarish',
      features: ['Energy Efficient', 'Long Lasting', 'Multiple Wattage', 'Warm & Cool White']
    },
    {
      id: '3',
      name: 'Schneider Switches',
      brand: 'Schneider Electric',
      description: 'Premium switches and accessories',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%20Realistic%20electrical%20switch%2C%20modern%20white%20electrical%20switch%20and%20socket%2C%20high-detail%203D%20rendering%2C%20prominent%20main%20subjects%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20product%20photography%20style&width=100&height=100&seq=schneider1&orientation=squarish',
      features: ['Modular Design', 'Premium Quality', 'Multiple Colors', 'Easy Installation']
    },
    {
      id: '4',
      name: 'Orient Fans',
      brand: 'Orient',
      description: 'High-performance ceiling fans',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20ceiling%20fan%2C%20modern%20white%20ceiling%20fan%20with%20blades%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20high%20detail%20quality&width=100&height=100&seq=orient1&orientation=squarish',
      features: ['Energy Efficient', 'Silent Operation', 'Multiple Speeds', '2 Year Warranty']
    },
    {
      id: '5',
      name: 'MCB Circuit Breakers',
      brand: 'Multiple Brands',
      description: 'Safety circuit breakers and protection',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%20Realistic%20MCB%20circuit%20breaker%2C%20electrical%20safety%20device%2C%20white%20plastic%20housing%2C%20high-detail%203D%20rendering%2C%20prominent%20main%20subjects%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20product%20photography%20style&width=100&height=100&seq=mcb1&orientation=squarish',
      features: ['Overload Protection', 'Short Circuit Protection', 'Multiple Ratings', 'ISI Certified']
    },
    {
      id: '6',
      name: 'LED Flood Lights',
      brand: 'Multiple Brands',
      description: 'Outdoor and indoor flood lighting',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20LED%20floodlight%2C%20modern%20outdoor%20lighting%20fixture%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20high%20detail%20quality&width=100&height=100&seq=flood1&orientation=squarish',
      features: ['Weatherproof', 'High Brightness', 'Energy Saving', 'Multiple Wattage']
    },
    {
      id: '7',
      name: 'Electric Heaters',
      brand: 'Multiple Brands',
      description: 'Room heaters and water heaters',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%20Realistic%20electric%20heater%2C%20modern%20room%20heater%20appliance%2C%20white%20and%20black%20design%2C%20high-detail%203D%20rendering%2C%20prominent%20main%20subjects%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20product%20photography%20style&width=100&height=100&seq=heater1&orientation=squarish',
      features: ['Instant Heating', 'Energy Efficient', 'Safety Features', 'Portable Design']
    },
    {
      id: '8',
      name: 'Hanging Lamps',
      brand: 'Multiple Brands',
      description: 'Decorative hanging lights and chandeliers',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20hanging%20lamp%2C%20modern%20pendant%20light%20fixture%2C%20elegant%20design%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20high%20detail%20quality&width=100&height=100&seq=lamp1&orientation=squarish',
      features: ['Designer Collection', 'Multiple Styles', 'LED Compatible', 'Easy Installation']
    },
    {
      id: '9',
      name: 'Gate Lights',
      brand: 'Multiple Brands',
      description: 'Outdoor gate and security lighting',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%20Realistic%20gate%20light%2C%20outdoor%20security%20lighting%20fixture%2C%20modern%20design%2C%20high-detail%203D%20rendering%2C%20prominent%20main%20subjects%2C%20clear%20and%20sharp%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20soft%20lighting%2C%20product%20photography%20style&width=100&height=100&seq=gate1&orientation=squarish',
      features: ['Motion Sensor', 'Weatherproof', 'Solar Option', 'Bright LED']
    },
    {
      id: '10',
      name: 'Chandeliers',
      brand: 'Multiple Brands',
      description: 'Premium decorative chandeliers',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20chandelier%2C%20elegant%20crystal%20chandelier%2C%20luxury%20lighting%20fixture%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20high%20detail%20quality&width=100&height=100&seq=chandelier1&orientation=squarish',
      features: ['Crystal Design', 'Multiple Sizes', 'LED Compatible', 'Premium Quality']
    }
  ];

  return (
    <>
      <section className="px-4 pb-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Product Categories</h2>
          <p className="text-gray-600">Explore our wide range of electrical products</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              <div className="w-full h-24 mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center shadow-inner">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-bold text-sm text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {product.name}
              </h3>
              <p className="text-xs text-blue-600 font-semibold mb-2">{product.brand}</p>
              <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
