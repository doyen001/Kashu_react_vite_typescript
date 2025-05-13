import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import { FilterIcon } from "../../../components/ui/icons";

type Props = {
  filter: "type" | "date" | "export";
  setFilter: (filter: "type" | "date" | "export") => void;
};

const ActivityFilterBox = ({ filter, setFilter }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <FilterIcon />
      </PopoverTrigger>
      <PopoverContent className="px-0 mr-2 w-fit">
        <p
          className={clsx("px-4 py-2", {
            "bg-secondary text-primary": filter === "type",
          })}
          role="button"
          onClick={() => setFilter("type")}
        >
          Filter by Type
        </p>
        <p
          className={clsx("px-4 py-2", {
            "bg-secondary text-primary": filter === "date",
          })}
          role="button"
          onClick={() => setFilter("date")}
        >
          Sort by Date & Amount
        </p>
        <p
          className={clsx("px-4 py-2", {
            "bg-secondary text-primary": filter === "export",
          })}
          role="button"
          onClick={() => setFilter("export")}
        >
          Export filtered transactions
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default ActivityFilterBox;
