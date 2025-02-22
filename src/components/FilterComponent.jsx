/* eslint-disable react/prop-types */

export function FilterComponent({ filters, removeFilter, setFilters }) {
  return (
    <div className="absolute right-1/2 -bottom-10 flex w-[94%] translate-x-1/2 flex-wrap items-center gap-4 rounded-md bg-white px-8 py-4 max-lg:-bottom-16 lg:w-[79%]">
      {filters.map((filter) => (
        <div className="flex items-stretch" key={filter}>
          <p className="text-lightGray bg-bodyBg cursor-pointer rounded-l-lg px-2 py-1.5 font-semibold">
            {filter}
          </p>

          <button
            className="hover:bg-veryDarkGray bg-lightGray cursor-pointer rounded-r-lg px-2"
            onClick={() => removeFilter(filter)}
          >
            <img
              src="/icon-remove.svg"
              alt="remove icon"
              width={15}
              height={15}
            />
          </button>
        </div>
      ))}

      <p
        onClick={() => setFilters([])}
        className="text-lightGray ml-auto cursor-pointer font-bold hover:underline"
      >
        Clear
      </p>
    </div>
  );
}
