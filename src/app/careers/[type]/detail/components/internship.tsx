import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import routes from "@/routes";

const Internship = () => {
  const auth = useAuth();
  return (
    <div className="space-y-8 overflow-y-auto max-h-[80vh] pr-4">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-full text-sm font-semibold">
          Internship Program
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Launch Your Career Journey
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Gain hands-on experience, learn from industry experts, and build your
          professional network. Our comprehensive internship program is designed
          to accelerate your career growth.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Real-World Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Work on actual projects that impact our business and customers
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Expert Mentorship
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            One-on-one guidance from senior professionals in your field
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 p-6 rounded-xl">
          <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Career Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Build professional skills and network for future opportunities
          </p>
        </div>
      </div>

      {/* Program Structure */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Program Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🎯 Program Structure
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 12-week summer program</li>
              <li>• Full-time commitment (40 hours/week)</li>
              <li>• Structured learning curriculum</li>
              <li>• Weekly mentor check-ins</li>
              <li>• Final project presentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              💡 Learning Opportunities
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Technical workshops and training</li>
              <li>• Industry best practices exposure</li>
              <li>• Cross-departmental rotations</li>
              <li>• Professional development seminars</li>
              <li>• Networking events and meetups</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              💰 Compensation & Perks
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Competitive stipend ($3,000 - $5,000/month)</li>
              <li>• Transportation allowance</li>
              <li>• Free lunch and snacks</li>
              <li>• Company swag and equipment</li>
              <li>• Certificate of completion</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🚀 Post-Program Benefits
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Strong recommendation letters</li>
              <li>• Alumni network access</li>
              <li>• Priority for full-time positions</li>
              <li>• Portfolio project showcase</li>
              <li>• Continued mentorship opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Eligibility & Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Academic Requirements
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Currently enrolled undergraduate/graduate</li>
              <li>• Relevant field of study</li>
              <li>• Minimum 3.0 GPA</li>
              <li>• Available for full summer program</li>
              <li>• Strong academic standing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Personal Qualities
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Eager to learn and grow</li>
              <li>• Strong work ethic and initiative</li>
              <li>• Excellent communication skills</li>
              <li>• Team collaboration mindset</li>
              <li>• Problem-solving orientation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Timeline */}
      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Application Timeline
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Application
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Submit resume, transcript, and cover letter
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              Deadline: March 15
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Screening
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Phone/video interview with HR team
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              Late March
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Final Interview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Technical assessment with team leads
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              Early April
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Program Starts
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Orientation and onboarding week
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              June 1st
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Join our internship program and gain the experience and skills you
          need to launch a successful career. Applications are now open!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {auth.isSignedIn && (
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
            >
              <Link href="/careers/internship">Apply for Internship</Link>
            </Button>
          )}
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-3"
          >
            <Link href={routes.ContactUs}>Download Program Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Internship;
