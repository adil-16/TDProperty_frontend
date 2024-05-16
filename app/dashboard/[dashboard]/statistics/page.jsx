import BackButton from "@/components/Buttons/BackButton";
import ListingComparisonCard from "@/components/Cards/ListingComparisonCard";
import MostSearchesCard from "@/components/Cards/MostSearchesCard";


const StatisticsPage = () => {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col">
        <BackButton />
        <h1 className="text-3xl font-bold my-5">In-depth Statistics</h1>
        <div className="flex justify-between gap-8">
          <MostSearchesCard title="Most searches by the users" />
          <MostSearchesCard title="Most searched real estates in UAE" />
        </div>
        <div className="py-8">
          <ListingComparisonCard />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
