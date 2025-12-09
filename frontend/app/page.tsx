"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import ComicCard from "@/components/comic-card";
import FilterSidebar, { FilterState } from "@/components/filter-sidebar";
import { comics } from "@/lib/comics-data";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    genres: [],
    years: [],
    showBestsellersOnly: false,
  });

  const filteredComics = useMemo(() => {
    return comics.filter((comic) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          comic.title.toLowerCase().includes(query) ||
          comic.description.toLowerCase().includes(query) ||
          comic.characterTags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Genre filter
      if (filters.genres.length > 0 && !filters.genres.includes(comic.genre)) {
        return false;
      }

      // Year filter
      if (filters.years.length > 0 && !filters.years.includes(comic.publicationYear)) {
        return false;
      }

      // Bestseller filter
      if (filters.showBestsellersOnly && !comic.isBestseller) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const featuredComics = useMemo(() => {
    return comics.filter((comic) => comic.isFeatured).slice(0, 6);
  }, []);

  const handleClearFilters = () => {
    setFilters({
      genres: [],
      years: [],
      showBestsellersOnly: false,
    });
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />

      {/* Hero Section */}
      {!searchQuery && filters.genres.length === 0 && filters.years.length === 0 && !filters.showBestsellersOnly && (
        <section className="relative overflow-hidden border-b border-white/10">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white/80">Premium Digital Comics Collection</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  Legendary Heroes.
                </span>
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: "200ms" }}>
                  Epic Stories.
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: "400ms" }}>
                Explore the DC Universe with thousands of digital comics featuring Batman, Superman, Wonder Woman, and more legendary heroes.
              </p>
            </div>

            {/* Featured Comics */}
            {featuredComics.length > 0 && (
              <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: "600ms" }}>
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  Featured Comics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {featuredComics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Comics Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : "All Comics"}
              </h2>
              <span className="text-sm text-white/60">
                {filteredComics.length} {filteredComics.length === 1 ? "comic" : "comics"}
              </span>
            </div>

            {filteredComics.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredComics.map((comic) => (
                  <ComicCard key={comic.id} comic={comic} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-4">
                <p className="text-xl text-white/60">No comics found</p>
                <p className="text-sm text-white/40">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-white/60 text-sm">
          <p>© 2024 DC Comics Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
