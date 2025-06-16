import ShinyText from "@/components/ui/shiny-text";
import React from "react";
import YangonMap from "../components/YangonMap";
import AnimatedContent from "@/components/ui/animated-content";

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
          <AnimatedContent direction="horizontal" reverse={true} duration={1}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group p-6 ">
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
          </AnimatedContent>
        </div>

        {/* Right Side - Map Container */}
        <div className="w-full lg:w-1/2">
          <div className=" h-[400px] lg:h-full rounded-2xl border-dashed  flex items-center justify-center">
            <YangonMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
