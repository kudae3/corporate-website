import ShinyText from "@/components/ui/shiny-text";
import React from "react";

const contactInfo = [
  {
    icon: "./gmail.gif",
    title: "Email Us",
    value: "hello@digitaltide.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: "./Whatsapp.gif",
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Available Monday to Friday, 9 AM - 6 PM EST",
  },
  {
    icon: "./Facebook.gif",
    title: "Follow Us",
    value: "www.facebook.com/digitaltide",
    description: "Stay updated with our latest news and offers",
  },
  {
    icon: "./location.gif",
    title: "Visit Us",
    value: "123 Business Ave, Suite 100",
    description: "New York, NY 10001, United States",
  },
];

const ContactUsPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get In{" "}
          <span className="text-primary" style={{ fontWeight: "600" }}>
            Touch
          </span>
        </h2>
        <ShinyText
          text=" We'd love to hear from you. Whether you have a question about our
          services, need support, or want to discuss your next project, our team
          is ready to help. Reach out to us using any of the methods below."
          disabled={false}
          speed={3}
          className="max-w-3xl mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side - Contact Information */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <img
                      src={info.icon}
                      alt={info.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {info.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Map Container */}
        <div className="w-full lg:w-1/2">
          <div className="h-full min-h-[600px] bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Google Maps Integration
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Map will be embedded here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
