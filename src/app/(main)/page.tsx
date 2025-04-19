import SearchForm from "@/components/SearchForm";

const Home = async () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">
            Recipe Finder App
          </h1>
        </div>
        <div className="bg-white p-6 rounded-lg ">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
