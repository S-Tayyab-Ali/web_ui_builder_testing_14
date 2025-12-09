"use client";

import { genres, years } from "@/lib/comics-data";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { X } from "lucide-react";

export interface FilterState {
  genres: string[];
  years: number[];
  showBestsellersOnly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({ filters, onFilterChange, onClearFilters }: FilterSidebarProps) {
  const handleGenreToggle = (genre: string) => {
    const newGenres = filters.genres.includes(genre)
      ? filters.genres.filter(g => g !== genre)
      : [...filters.genres, genre];
    
    onFilterChange({ ...filters, genres: newGenres });
  };

  const handleYearToggle = (year: number) => {
    const newYears = filters.years.includes(year)
      ? filters.years.filter(y => y !== year)
      : [...filters.years, year];
    
    onFilterChange({ ...filters, years: newYears });
  };

  const handleBestsellerToggle = () => {
    onFilterChange({ ...filters, showBestsellersOnly: !filters.showBestsellersOnly });
  };

  const hasActiveFilters = filters.genres.length > 0 || filters.years.length > 0 || filters.showBestsellersOnly;

  return (
    <aside className="w-full lg:w-64 space-y-6 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Genre Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-white/80">Genre</Label>
        <div className="space-y-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <Checkbox
                id={`genre-${genre}`}
                checked={filters.genres.includes(genre)}
                onCheckedChange={() => handleGenreToggle(genre)}
                className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <label
                htmlFor={`genre-${genre}`}
                className="text-sm text-white/70 hover:text-white cursor-pointer transition-colors"
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-white/80">Publication Year</Label>
        <div className="space-y-2">
          {years.map((year) => (
            <div key={year} className="flex items-center space-x-2">
              <Checkbox
                id={`year-${year}`}
                checked={filters.years.includes(year)}
                onCheckedChange={() => handleYearToggle(year)}
                className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <label
                htmlFor={`year-${year}`}
                className="text-sm text-white/70 hover:text-white cursor-pointer transition-colors"
              >
                {year}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Filter */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="bestsellers"
            checked={filters.showBestsellersOnly}
            onCheckedChange={handleBestsellerToggle}
            className="border-white/20 data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600"
          />
          <label
            htmlFor="bestsellers"
            className="text-sm font-medium text-white/70 hover:text-white cursor-pointer transition-colors"
          >
            Bestsellers Only
          </label>
        </div>
      </div>
    </aside>
  );
}
