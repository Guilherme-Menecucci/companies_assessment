import React from 'react';
import useHomeLogic from '../../src/logic/useHomeLogic';
import ImageWithFallback from '../../src/lib/HoC/withFallbackImage';
import Typography from '../../src/components/Typography';

function Home() {
  const { groupedCompanies, loading, expandedIndustries, setExpandedIndustries } = useHomeLogic();

  if (loading) return <p className="text-center text-gray-500">Loading companies...</p>;

  return (
    <div className="flex flex-wrap items-start gap-4">
      {groupedCompanies.map(industry => {
        const isExpanded = expandedIndustries[industry.name] || false;
        const displayedCompanies = isExpanded ? industry.companies : industry.companies.slice(0, 6);

        return (
          <div
            key={industry.name}
            className="flex min-h-80 w-72 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-md"
            style={{ flex: '0 1 calc(25% - 1rem)' }}
          >
            <div className="mb-2 flex items-center justify-between">
              <Typography
                component="h3"
                variant="title"
                size="medium"
                emphasis="full"
                className="capitalize"
              >
                {industry.name}
              </Typography>
              <span className="text-sm font-bold text-gray-500">{industry.companies.length}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 px-2 py-1 text-xs font-semibold text-gray-500">
              <span>Name</span>
              <span>Total jobs available</span>
            </div>
            <ul className="mt-2">
              {displayedCompanies.map(company => (
                <li key={company.uuid} className="flex items-center gap-3 px-2 py-2">
                  <ImageWithFallback
                    src={company.images['32x32']}
                    alt={company.name}
                    className="h-6 w-6 rounded-md"
                  />
                  <span className="flex-1 text-sm">{company.name}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {company.total_jobs_available}
                  </span>
                </li>
              ))}
            </ul>
            {industry.companies.length > 6 && (
              <button
                className="mt-2 cursor-pointer self-end text-sm font-semibold text-blue-300"
                onClick={() =>
                  setExpandedIndustries(prev => ({ ...prev, [industry.name]: !isExpanded }))
                }
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
