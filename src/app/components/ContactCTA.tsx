import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main CTA */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your
            goals. Get in touch with our team of experts today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              variant="ghost"
              asChild
              className="cursor-pointer hover:bg-primary duration-300 transition-colors"
            >
              <Link href="/contact-us">
                Start Your Project
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Button>

            <Button variant="secondary" asChild className="cursor-pointer">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="./gmail.gif"
                  alt=""
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-primary-100">hello@yourcompany.com</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <img src="./Whatsapp.gif" alt="" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-primary-100">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <img src="./Messenger.gif" alt="" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Message Us</h3>
              <p className="text-primary-100">Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
