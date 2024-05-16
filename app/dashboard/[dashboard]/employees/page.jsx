import EmployeeCreateRoleButton from "@/components/Buttons/EmployeeCreateRoleButton";
import AddEmployeeModal from "@/components/Modals/AddEmployeeModal";
import EmployeesTable from "@/components/Tables/EmployeesTable";


const CompanyEmployeePage = () => {
  return (
    <div className="flex items-center justify-center px-20 py-10">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold">Employees</h1>
          <div className="flex gap-2">
            <AddEmployeeModal />
            <EmployeeCreateRoleButton />
          </div>
        </div>
        <p className="mt-2 text-sm text-thememutedtext">
          Find all of your employees and manage their privileges accounts and
          their associate Privileges.
        </p>
        <EmployeesTable />
      </div>
    </div>
  );
};

export default CompanyEmployeePage;
