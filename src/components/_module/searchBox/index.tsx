import { Input } from "../../ui/input";
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative">
      <Input
        placeholder="Search"
        className="py-[10px] pl-10 border-gray-200 rounded-2xl text-primary hover:border-gray-300 h-[43px]"
      />
      <SearchIcon className="absolute w-4 h-4 -translate-y-1/2 text-primary opacity-80 left-5 top-1/2" />
    </div>
  );
};

export default SearchBox;
