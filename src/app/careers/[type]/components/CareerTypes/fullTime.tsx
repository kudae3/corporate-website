import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import routes from "@/routes";

const FullTime = () => {
  const auth = useAuth();

  return (
    <div className="space-y-8 overflow-y-auto max-h-[80vh] pr-4">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
          Full-Time Careers
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Build Your Career With Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join our dynamic team and take your career to the next level. We offer
          competitive compensation, comprehensive benefits, and endless
          opportunities for growth.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Competitive Salary
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Industry-leading compensation packages with annual performance
            bonuses
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Health Benefits
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Comprehensive health, dental, and vision insurance for you and your
            family
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Career Growth
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Clear promotion paths with mentorship and professional development
            programs
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              💰 Financial Benefits
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Competitive base salary ($80k - $150k)</li>
              <li>• Annual performance bonuses</li>
              <li>• Stock options and equity participation</li>
              <li>• 401(k) with company matching</li>
              <li>• Flexible spending accounts</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🏥 Health & Wellness
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Premium health insurance (100% covered)</li>
              <li>• Dental and vision coverage</li>
              <li>• Mental health support programs</li>
              <li>• Wellness stipend ($1,200/year)</li>
              <li>• On-site fitness facility</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              ⏰ Work-Life Balance
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Flexible working hours</li>
              <li>• Remote work options (hybrid)</li>
              <li>• 25 days PTO + holidays</li>
              <li>• Sabbatical opportunities</li>
              <li>• Parental leave (16 weeks)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              📚 Professional Development
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• $5,000 annual learning budget</li>
              <li>• Conference attendance sponsorship</li>
              <li>• Internal mentorship programs</li>
              <li>• Technical certification support</li>
              <li>• Cross-team collaboration projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What We're Looking For
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Essential Skills
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Bachelor's degree in relevant field</li>
              <li>• 3+ years of professional experience</li>
              <li>• Strong problem-solving abilities</li>
              <li>• Excellent communication skills</li>
              <li>• Team collaboration experience</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Preferred Qualifications
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Advanced degree or certifications</li>
              <li>• Leadership or mentoring experience</li>
              <li>• Industry-specific expertise</li>
              <li>• Agile/Scrum methodology knowledge</li>
              <li>• Continuous learning mindset</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Application Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Apply Online
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Submit your application and resume
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Phone Screen
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Initial conversation with HR
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Technical Interview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Skills assessment with the team
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Final Interview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Meet with leadership team
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ready to Join Our Team?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Take the next step in your career journey. Browse our current openings
          and apply today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {auth.isSignedIn && (
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              <Link href="/careers/full-time">View Open Positions</Link>
            </Button>
          )}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
          >
            <Link href={routes.ContactUs}>Contact HR Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullTime;
