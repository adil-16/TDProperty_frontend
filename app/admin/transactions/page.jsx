import BackButton from "@/components/Buttons/BackButton";
import TransactionsTable from "@/components/Tables/TransactionsTable";


const TransactionsPage = () => {
  return (
    <div className="flex flex-col gap-3 px-8 py-6">
        <BackButton />
      <h1 className="text-4xl font-extrabold mb-5">Transactions</h1>
      <TransactionsTable />
    </div>
  );
};

export default TransactionsPage;
