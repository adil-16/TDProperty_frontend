import BackButton from "@/components/Buttons/BackButton";


const EmployeeProfile = () => {
  return (
    <div className="flex flex-col px-20 py-10">
      <BackButton />
      <div className="px-2">
        <h1 className="text-4xl font-extrabold">Employee Profile</h1>
      </div>
    </div>
  );
};

export default EmployeeProfile;
