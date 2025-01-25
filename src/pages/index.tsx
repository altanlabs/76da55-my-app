import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="w-full py-6 bg-blue-500 dark:bg-blue-700 text-center">
        <h1 className="text-4xl font-bold text-white">Your Business Name</h1>
        <p className="text-lg text-white mt-2">Your clear and concise tagline or value proposition</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <img src="/path-to-your-hero-image.jpg" alt="Hero" className="w-full max-w-2xl h-auto mb-8" />
        <section className="text-center px-4">
          <h2 className="text-2xl font-semibold mb-4">About Our Business</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Brief overview of your business and its key services or products.
          </p>
          <Link to="/contact">
            <Button className="bg-green-500 dark:bg-green-700 text-white px-6 py-3 rounded-md">
              Contact Us
            </Button>
          </Link>
        </section>
      </main>

      <footer className="w-full py-4 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:text-white">Facebook</a>
          <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:text-white">Twitter</a>
          <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:text-white">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
