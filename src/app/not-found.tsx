import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import routes from "@/routes";

const NotFound = () => {
  return (
    <div className="min-h-screen container bg-white dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Large 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center items-center mb-16">
          <Button
            variant="default"
            asChild
            className="cursor-pointer hover:bg-primary/90 duration-300 transition-colors"
          >
            <Link href={routes.Home}>
              <svg
                className="mr-1 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>
          </Button>

          <Button
            variant="ghost"
            asChild
            className="cursor-pointer hover:bg-gray-600 duration-300 transition-colors"
          >
            <Link href={routes.ContactUs}>Contact Support</Link>
          </Button>
        </div>

        {/* Quick Navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 dark:bg-teal-900/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-50 dark:bg-teal-900/10 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-200 dark:bg-teal-800/20 rounded-full opacity-25"></div>
      </div>
    </div>
  );
};

export default NotFound;
