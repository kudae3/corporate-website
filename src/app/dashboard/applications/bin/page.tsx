import { Button } from "@/components/ui/button";
import Table from "./components/table";
import { SkipBack, StepBack } from "lucide-react";
import Back from "./components/back";

const page = () => {
  return (
    <div className="flex-1">
      <div className="mb-6 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold dark:text-white mb-2">
            Your Deleted Applications
          </h1>
          <p className="dark:text-gray-400">
            Manage and view your deleted applications
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Back />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
