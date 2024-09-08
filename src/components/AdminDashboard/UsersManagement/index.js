import UsersManagementTable from "./UsersManagementTable";

const UsersManagement = () => {
  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">Users</div>
          <div className="font-normal text-[#667085] text-[12px]">
            This is all listed users you can manage
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            + Add New Users
          </button>
        </div>
      </div>

      {/* Users Management Table */}
      <div className="pt-4 md:pt-6">
        <UsersManagementTable />
      </div>
    </div>
  );
};

export default UsersManagement;
