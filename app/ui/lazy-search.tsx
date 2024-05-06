import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { joinArrays } from "../lib/utils";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

interface LazySearchProps<T> {
  zIndex: number;
  className?: string;
  childHoverClassName?: string;
  matchClassName?: string;
  placeholder?: string;
  fieldNames: string[];
  endpoint: string;
  receiveSelection: (item: T) => void;
}

export function LazySearch<T extends { [key: string]: string | number }>({
  zIndex,
  receiveSelection,
  childHoverClassName,
  matchClassName,
  placeholder,
  className,
  endpoint,
  fieldNames = [],
}: LazySearchProps<T>) {
  const [items, setItems] = useState<Array<T>>([]);
  const [search, setSearch] = useState<string>("");
  const [searching, setSearching] = useState(false);

  const fetchItems = async function (search: string): Promise<Array<T>> {
    return await axios
      .post(endpoint, {
        query: search,
      })
      .then((res) => res.data)
      .catch((axiosError) => {
        throw new Error(axiosError.message);
      });
  };

  useEffect(() => {
    const fetchItemsAsync = async () => {
      setSearching(true);
      const results = await fetchItems(search);
      setSearching(false);
      setItems(results);
    };
    if (search && fieldNames.length > 0) {
      fetchItemsAsync();
    } else {
      setItems([]);
    }
  }, [search]);

  return (
    <div className={`relative h-12`}>
      <div
        style={{ zIndex: zIndex }}
        className={`${className} absolute overflow-hidden left-0 right-0 top-0 grip gap-4 py-2 px-2`}
      >
        <div className="relative flex grow">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className={`peer block w-full outline-none bg-transparent  py-1 px-10 text-sm outline-2 placeholder:text-gray-500`}
            placeholder={placeholder}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          <div className="absolute top-full inset-x-0">
          <LinearProgress
            sx={{
              opacity: searching ? 1 : 0,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "rgb(70, 79, 241)",
              },
            }}
          />
        </div>
        </div>
        
        <div className="grid gap-2 pl-1">
          {items.map((item, idx) => (
            <div
              onClick={() => {
                if (typeof receiveSelection === "function") {
                  receiveSelection(item);
                  setItems([]);
                  setSearch("");
                }
              }}
              className={`${idx === 0 && "mt-4"} border-l-4 px-4 py-1 cursor-pointer ${childHoverClassName}`}
              key={idx}
            >
              {fieldNames.map((field, idx2) => (
                <div className="" key={idx2}>
                  {joinArrays(`${item[field]}`, search, matchClassName)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
