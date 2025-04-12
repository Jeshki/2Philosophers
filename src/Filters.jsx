// src/Filters.jsx
import React from 'react';
import { GeographicalOrderEnum, IdeologicalGroups } from './enums'; // Įsitikinkite, kad kelias teisingas

// Komponentas ideologinei grupei filtruoti
export function GroupFilter({ selectedGroup, setSelectedGroup }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="group" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Ideological Group</label>
      <select
        id="group"
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:ring-green-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-[42px]"
      >
        <option value="">All Groups</option>
        {IdeologicalGroups && typeof IdeologicalGroups === 'object' && Object.keys(IdeologicalGroups).map((group) => (
          <option key={group} value={group}>{group}</option>
        ))}
      </select>
    </div>
  );
}

// Komponentas geografiniam regionui filtruoti
export function GeoFilter({ selectedRegion, setSelectedRegion }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="region" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Geographical Region</label>
      <select
        id="region"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-[42px]"
      >
        <option value="">All Regions</option>
        {GeographicalOrderEnum && typeof GeographicalOrderEnum === 'object' && Object.entries(GeographicalOrderEnum).map(([key, value]) => (
          <option key={key} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}

// Komponentas rūšiavimui
export function SortFilter({ sortBy, setSortBy }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="sort" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Sort By</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:ring-purple-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-[42px]"
      >
        <option value="default">Name (A-Z)</option>
        <option value="chronological">Oldest First (Birth Year)</option>
        <option value="youngest_first">Youngest First (Birth Year)</option>
        <option value="newest_by_death">Newest First (Death Year)</option>
      </select>
    </div>
  );
}

// Komponentas filtrų nustatymų atstatymui
export function ResetFilters({ onReset }) {
    return (
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-all h-[42px]"
          aria-label="Reset filters and sorting"
        >
          Reset All
        </button>
      );
}

// Pagrindinis filtrų komponentas
export default function Filters({
  selectedGroup,
  setSelectedGroup,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy
}) {
  const handleReset = () => {
    setSelectedGroup('');
    setSelectedRegion('');
    setSortBy('default');
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 dark:bg-stone-900 rounded-2xl shadow-md items-end">
      <GroupFilter selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      <GeoFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
      <div className="flex items-end h-full mt-4 md:mt-0 ml-auto">
         <ResetFilters onReset={handleReset} />
      </div>
    </div>
  );
}