"use client";

import { Alert } from "@/app/components/AlertDialog";
import React, { useEffect, useState } from "react";
import { FileUploader } from "@/components/upload/multi-file";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";
import { CareerType } from "../../Types/career";
import toast from "react-hot-toast";
import { useSelectedCareerStore } from "@/lib/store/SelectedCareerStore";

const Submit = () => {
  const { selectedCareer } = useSelectedCareerStore();
  const [resumeURL, setResumeURL] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    message: "",
    terms: false,
  });
  const [messageError, setMessageError] = useState(false);

  // Validate message length
  useEffect(() => {
    setMessageError(
      formData.message.length > 0 && formData.message.length < 10
    );
  });

  const { edgestore } = useEdgeStore();

  // edgeStore's function to upload files
  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      console.log(res);
      if (res) {
        setResumeURL(res.url);
      }
      return res;
    },
    [edgestore]
  );

  // auth User data
  const auth = useAuthContext();
  const userData = auth?.userData;

  const SubmitJob = (id: CareerType["_id"]) => {
    console.log(`Job Submitted to id: ${id}`);
    console.log("Form data:", { ...formData, resumeURL });
    console.log("User data:", userData);

    const userId = userData?._id || "";
    const careerId = selectedCareer?._id || "";
    const resume = resumeURL || "";
    const coverLetter = formData.message || "";

    axios
      .post("http://localhost:3000/api/applications", {
        userId,
        careerId,
        resume,
        coverLetter,
      })
      .then((response) => {
        console.log("Application submitted successfully", response.data);
        toast.success("Application submitted successfully!");
      })
      .catch(() => {
        console.log("Error submitting application");
        toast.error("Failed to submit application. Please try again.");
      });
  };

  const isValidForm = () => {
    return formData.message !== "" && formData.terms && resumeURL;
  };

  return (
    <Alert
      onAction={() => SubmitJob(selectedCareer?._id || "")}
      action="Submit"
      btnDisabled={!isValidForm()}
      trigger={
        <button className="bg-slate-800 no-underline group flex-1 cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 justify-center items-center z-10 rounded-full py-2 px-4 ring-1 ring-white/10 ">
            <p>Apply Now</p>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      }
    >
      <div className="space-y-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Apply for {selectedCareer?.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fill out the form below to submit your application
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5 text-start">
          {/* Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              disabled
              value={userData?.username}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled
              value={userData?.email}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3  rounded-lg  focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Resume/CV *
            </label>

            <UploaderProvider uploadFn={uploadFn} autoUpload>
              <FileUploader
                id="resume"
                maxFiles={1}
                maxSize={1024 * 1024 * 5} // 5 MB
                accept={{
                  "application/pdf": [],
                  "text/plain": [".txt"],
                }}
              />
            </UploaderProvider>
          </div>

          {/* Cover Letter/Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Cover Letter / Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="w-full px-4 py-3  rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white placeholder-gray-400 resize-vertical transition-colors"
            ></textarea>
            {messageError && (
              <p className="text-xs text-red-500 mt-1">
                Cover letter must be at least 10 characters long.
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={formData.terms}
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.checked })
              }
              className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </form>
      </div>
    </Alert>
  );
};

export default Submit;
