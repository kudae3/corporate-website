import Bin from "./components/bin";
import Table from "./components/table";

const page = () => {
  return (
    <div className="flex-1">
      <div className="mb-6 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold dark:text-white mb-2">
            Application Management
          </h1>
          <p className="dark:text-gray-400">Manage and view all applications</p>
        </div>
        <div className="flex items-center gap-2">
          <Bin />
        </div>
      </div>

      <Table />
    </div>
  );
};

export default page;
