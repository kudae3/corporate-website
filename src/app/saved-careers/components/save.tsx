"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useSelectedCareerStore } from "@/lib/store/SelectedCareerStore";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Dotwave from "@/components/ui/dot-wave";

const Save = () => {
  // auth User data
  const auth = useAuthContext();
  const userData = auth?.userData;

  const { selectedCareer } = useSelectedCareerStore();

  const [isSaved, setIsSaved] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const queryClient = useQueryClient();
  useEffect(() => {
    const checkSave = async () => {
      try {
        await axios
          .get(
            `http://localhost:3000/api/save-check/${userData?._id}/${selectedCareer?._id}`
          )
          .then((resposne) => {
            if (resposne.data.data.saved) {
              console.log("Job Saved");
              setIsSaved(true);
            } else {
              console.log("Job Unsaved");
              setIsSaved(false);
            }
          })
          .catch((error) => {
            console.log("Error Checking Status", error.message);
          });
      } catch (error) {
        console.log("Error Checking Status", error);
      }
    };
    checkSave();
  }, [userData?._id, selectedCareer?._id]);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios
        .post("http://localhost:3000/api/careers/save", {
          userId: userData?._id,
          careerId: selectedCareer?._id,
        })
        .then((resposne) => {
          if (resposne.data.data.saved) {
            console.log("Job saved successfully");
            toast.success("Job saved successfully");
            setIsSaved(true);
            setIsLoading(false);
          } else {
            setIsSaved(false);
            setIsLoading(false);
            queryClient.invalidateQueries({
              queryKey: ["saved-careers", userData?._id],
            });
            console.log("Job unsaved successfully");
            toast.success("Job unsaved successfully");
          }
        })
        .catch((error) => {
          console.log("Error saving job", error.message);
          toast.error("Error saving job");
          setIsLoading(false);
        });
    } catch (error) {
      console.log("Error saving job:", error);
      toast.error("Error saving job");
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSave}
      className="bg-slate-800 no-underline group flex-1 cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div
        className={`relative flex space-x-2 justify-center items-center z-10 rounded-full py-2 px-4 ring-1 ring-white/10 ${
          isSaved ? "bg-emerald-600" : ""
        }`}
      >
        {isLoading && <Dotwave />}
        <p>{isSaved ? "Saved" : "Save Job"}</p>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export default Save;
