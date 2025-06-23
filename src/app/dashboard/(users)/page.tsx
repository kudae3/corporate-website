import { Filter } from "./components/filter";
import Table from "./components/table";

const page = () => {
  return (
    <div className="flex-1">
      <div className="mb-6 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold dark:text-white mb-2">
            User Management
          </h1>
          <p className="dark:text-gray-400">
            Manage and view all registered users
          </p>
        </div>
        <div>
          <Filter />
        </div>
      </div>

      <Table />
    </div>
  );
};

export default page;
