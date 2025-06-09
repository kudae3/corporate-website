"use client";

import { CareerType } from "@/app/(root)/careers/Types/career";
import { Alert } from "@/app/(root)/components/AlertDialog";
import TextEditor from "@/components/editor/TextEditor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "full-time" as CareerType["type"],
    description: "",
    requirements: "",
    salary: "",
  });

  const queryClient = useQueryClient();

  // mutation function
  const mutation = useMutation({
    mutationFn: (data: typeof formData) => {
      return axios.post("http://localhost:3000/api/careers", data);
    },
    onSuccess: () => {
      console.log("Career added successfully");
      queryClient.invalidateQueries({ queryKey: ["careers"] });
      // Optionally, you can reset the form or refetch data here
    },
    onError: (error) => {
      console.error("Failed to add career", error);
    },
  });

  const handleSubmit = () => {
    console.log("Career data to be added:", formData);
    mutation.mutate(formData);
  };
  return (
    <div>
      <Alert
        title="Add Career"
        action="Confirm"
        onAction={handleSubmit}
        trigger={
          <button className="px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-800 cursor-pointer">
            Add Career
          </button>
        }
      >
        <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 dark:hover:scrollbar-thumb-gray-600">
          <form action="" method="post" className="space-y-5">
            {/* title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
                placeholder="Enter the title"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            {/* location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Location *
              </label>
              <input
                type="location"
                id="location"
                name="location"
                required
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                value={formData.location}
                placeholder="Enter the location"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            {/* type */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Type *
              </label>
              <select
                id="type"
                name="type"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type: e.target.value as CareerType["type"],
                  })
                }
                value={formData.type}
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            {/* description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                value={formData.description}
                placeholder="Enter the description"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            {/* salary */}
            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                salary *
              </label>
              <input
                type="salary"
                id="salary"
                name="salary"
                required
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                value={formData.salary}
                placeholder="Enter the description"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            {/* requirements */}
            <div>
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                requirements *
              </label>
              <TextEditor
                required
                value={formData.requirements}
                onChange={(value) =>
                  setFormData({ ...formData, requirements: value })
                }
              />
            </div>
          </form>
        </div>
      </Alert>
    </div>
  );
};

export default Add;
