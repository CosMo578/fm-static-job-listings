// JSON Data
import jobs from "/data.json";

// Hooks
import { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import { JobCard } from "./components/JobCard";
import { FilterComponent } from "./components/FilterComponent";

const App = () => {
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobs(jobs);
      return;
    }

    setFilteredJobs(
      jobs.filter((job) =>
        filters.every(
          (filter) =>
            job.languages?.includes(filter) ||
            job.tools?.includes(filter) ||
            job.role === filter ||
            job.level === filter,
        ),
      ),
    );
  }, [filters]);

  const handleClick = (filter) => {
    if (filters.includes(filter)) {
      return;
    }

    setFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
  };

  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden overflow-y-scroll bg-[#effafa]">
      <Header>
        {filters?.length !== 0 && (
          <FilterComponent
            filters={filters}
            removeFilter={removeFilter}
            setFilters={setFilters}
          />
        )}
      </Header>

      <main className="grid items-center gap-12 px-6 py-10 max-lg:pt-32 lg:gap-4 lg:px-36 lg:py-16">
        {filteredJobs?.map((job) => (
          <JobCard key={job.id} handleClick={handleClick} {...job} />
        ))}
      </main>
    </section>
  );
};

export default App;
