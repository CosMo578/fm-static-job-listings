/* eslint-disable react/prop-types */

export function JobCard({
  id,
  logo,
  company,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  handleClick,
  role,
  level,
  languages,
  tools,
}) {
  return (
    <div
      className={`max-w-full flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 shadow-lg lg:flex lg:flex-row ${
        isNew ? "border-l-[4px] border-[#5ba4a4]" : ""
      }`}
      key={id}
    >
      {/* Desktop Image */}
      <img
        className="hidden h-full lg:inline-block"
        src={logo}
        alt={company}
        width={80}
        height={80}
      />

      {/* Mobile Image */}
      <img
        className="-mt-12 mb-4 h-full lg:hidden"
        src={logo}
        alt={company}
        width={70}
        height={70}
      />

      <div className="space-y-1 max-lg:space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-lightGray font-bold">{company}</p>

          {isNew && (
            <p className="bg-lightGray ml-4 flex items-center justify-center rounded-full px-2 font-semibold text-white max-lg:font-medium">
              NEW!
            </p>
          )}
          {featured && (
            <p className="flex items-center justify-center rounded-full bg-black px-2 font-semibold text-white max-lg:font-medium">
              FEATURED
            </p>
          )}
        </div>

        <h2 className="hover:text-lightGray cursor-pointer text-lg font-semibold">
          {position}
        </h2>

        <div className="text-veryDarkGray flex items-center gap-3">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className="flex items-center gap-3 max-lg:mt-5 max-lg:flex-wrap max-lg:border-t max-lg:pt-4 lg:ml-auto">
        <li className="tags" onClick={() => handleClick(role)}>
          {role}
        </li>

        <li className="tags" onClick={() => handleClick(level)}>
          {level}
        </li>

        {languages?.map((language) => (
          <li
            className="tags"
            key={language}
            onClick={() => handleClick(language)}
          >
            {language}
          </li>
        ))}

        {tools?.map((tool) => (
          <li className="tags" key={tool} onClick={() => handleClick(tool)}>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
