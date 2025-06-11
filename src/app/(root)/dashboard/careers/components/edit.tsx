import { CareerType } from "@/app/(root)/careers/Types/career";
import { Alert } from "@/app/(root)/components/AlertDialog";
import TextEditor from "@/components/editor/TextEditor";
import EditIcon from "@/components/icons/EditIcon";
import { getPlainTextLength } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Edit = ({ career }: { career: CareerType }) => {
  const [descriptionError, setDescriptionError] = useState(false);
  const [requirementsError, setRequirementsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [formData, setFormData] = useState({
    id: career?._id || "",
    title: career?.title || "",
    location: career?.location || "",
    type: (career?.type || "full-time") as CareerType["type"],
    description: career?.description || "",
    requirements: career?.requirements || "",
    salary: career?.salary || "",
  });

  const queryClient = useQueryClient();

  // mutation function
  const mutation = useMutation({
    mutationFn: (data: typeof formData) =>
      axios.patch("http://localhost:3000/api/careers", data),
    onSuccess: () => {
      console.log("Career updated successfully");
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
    onError: (error) => {
      console.error("Failed to update career", error);
    },
  });

  const onSubmit = () => {
    console.log("Submitting form data:", formData);
    mutation.mutate(formData);
  };

  // Title validation
  useEffect(() => {
    setTitleError(formData.title.length > 0 && formData.title.length < 10);
  }, [formData.title]);

  // Description validation
  useEffect(() => {
    setDescriptionError(
      formData.description.length > 0 && formData.description.length < 10
    );
  }, [formData.description]);

  // Requirements validation
  useEffect(() => {
    const length = getPlainTextLength(formData.requirements);
    setRequirementsError(length > 0 && length < 10);
  }, [formData.requirements]);

  const isValidForm = () => {
    return (
      formData.title !== "" &&
      formData.title.length >= 10 &&
      formData.location !== "" &&
      formData.salary !== "" &&
      formData.description !== "" &&
      formData.description.length >= 10 &&
      formData.requirements !== "" &&
      getPlainTextLength(formData.requirements) >= 10
    );
  };

  return (
    <Alert
      title="Edit Career"
      action="Submit"
      onAction={onSubmit}
      btnDisabled={!isValidForm()}
      trigger={
        <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
          <EditIcon />
        </button>
      }
    >
      <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 dark:hover:scrollbar-thumb-gray-600">
        <form action="" method="post" className="space-y-5 overflow-y-auto">
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
            {titleError && (
              <p className="text-xs text-start text-red-500 mt-2">
                Title must be at least 10 characters long.
              </p>
            )}
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
            <input
              type="description"
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
            {descriptionError && (
              <p className="text-xs text-start text-red-500 mt-2">
                Description must be at least 10 characters long.
              </p>
            )}
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
            {requirementsError && (
              <p className="text-xs text-start text-red-500 mt-2">
                Requirements must be at least 10 characters long.
              </p>
            )}
          </div>
        </form>
      </div>
    </Alert>
  );
};

export default Edit;
