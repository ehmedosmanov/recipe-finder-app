import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white ">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-900">
                RecipeFinderApp
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-5">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link
              href="/recipes"
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Recipes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
