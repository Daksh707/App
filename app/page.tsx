
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PWAProvider from '@/components/PWAProvider';

export default function Home() {
  return (
    <PWAProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <ProductCategories />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PWAProvider>
  );
}
