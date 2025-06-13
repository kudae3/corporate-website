import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import routes from "@/routes";

const PartTime = () => {
  const auth = useAuth();
  return (
    <div className="space-y-8 overflow-y-auto max-h-[80vh] pr-4">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 rounded-full text-sm font-semibold">
          Part-Time Careers
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Flexible Career Opportunities
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Perfect work-life balance with meaningful career growth. Join our team
          with flexible schedules that fit your lifestyle while contributing to
          exciting projects.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Flexible Schedule
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Choose your hours and work around your commitments with our flexible
            scheduling
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Skill Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Gain valuable experience and develop new skills while working
            part-time
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Team Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Full access to team collaboration tools and meaningful project
            contributions
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
              💰 Compensation & Benefits
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Competitive hourly rate ($25 - $45/hour)</li>
              <li>• Performance-based bonuses</li>
              <li>• Flexible payment schedules</li>
              <li>• Pro-rated benefits eligibility</li>
              <li>• Expense reimbursement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              ⏰ Schedule Flexibility
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 15-25 hours per week</li>
              <li>• Choose your working days</li>
              <li>• Remote work options available</li>
              <li>• Flexible start/end times</li>
              <li>• Holiday schedule accommodation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              📚 Growth Opportunities
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Skill development programs</li>
              <li>• Mentorship opportunities</li>
              <li>• Path to full-time conversion</li>
              <li>• Cross-functional training</li>
              <li>• Professional networking events</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🎯 Work Environment
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Collaborative team culture</li>
              <li>• Modern tools and technology</li>
              <li>• Supportive management</li>
              <li>• Regular team activities</li>
              <li>• Open communication channels</li>
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
              Essential Requirements
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• High school diploma or equivalent</li>
              <li>• 1+ years relevant experience</li>
              <li>• Strong time management skills</li>
              <li>• Reliable internet connection</li>
              <li>• Excellent communication abilities</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Ideal Candidate
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Student or career changer welcome</li>
              <li>• Self-motivated and independent</li>
              <li>• Quick learner and adaptable</li>
              <li>• Detail-oriented approach</li>
              <li>• Passionate about growth</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Simple Application Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Submit Application
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Quick online application with resume
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Brief Interview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              30-minute conversation about fit
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Start Working
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Begin with orientation and training
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ready for Flexible Work?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Start your part-time career journey with us. Perfect for students,
          career changers, or anyone seeking work-life balance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {auth.isSignedIn && (
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              <Link href="/careers/part-time">Browse Part-Time Roles</Link>
            </Button>
          )}
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-3"
          >
            <Link href={routes.ContactUs}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartTime;
