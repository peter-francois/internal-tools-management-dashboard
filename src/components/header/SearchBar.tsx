import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  }
  return (
    <form role="search" onSubmit={handleSubmit} className="relative hidden sm:flex items-center">
      <label htmlFor="global-search" className="sr-only">
        {placeholder}
      </label>
      <Search
        size={15}
        className="pointer-events-none absolute left-3 text-gray-400"
        aria-hidden="true"
      ></Search>
      <input
        type="global search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-56 xl:w-72 rounded-lg border border-gray-200 bg-white
          py-2 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400
          transition-all duration-200
          focus:w-65 xl:focus:w-96 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100
          "
      ></input>
    </form>
  );
};

export default SearchBar;
