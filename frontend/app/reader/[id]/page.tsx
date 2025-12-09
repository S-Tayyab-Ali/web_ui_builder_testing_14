"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { comics } from "@/lib/comics-data";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Mock comic pages - in a real app, these would come from the API
const getComicPages = () => {
  // Using different comic-themed images for demonstration
  const pageImages = [
    "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1531346163669-b47c92ccd6fa?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=1200&h=1800&fit=crop",
    "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=1200&h=1800&fit=crop",
  ];

  return pageImages;
};

export default function ReaderPage() {
  const params = useParams();
  const router = useRouter();
  const comicId = params.id as string;

  const comic = comics.find((c) => c.id === comicId);
  const [currentPage, setCurrentPage] = useState(0);

  if (!comic) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-white text-xl">Comic not found</p>
          <Button onClick={() => router.push("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  if (!comic.isFree) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-white text-xl">This comic is not available for free reading</p>
          <Button onClick={() => router.push(`/comic/${comicId}`)}>View Comic Details</Button>
        </div>
      </div>
    );
  }

  const pages = getComicPages();
  const totalPages = pages.length;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNextPage();
    if (e.key === "ArrowLeft") goToPrevPage();
    if (e.key === "Escape") router.back();
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-white font-semibold truncate max-w-md">
              {comic.title}
            </h1>
            <p className="text-white/40 text-sm">
              Page {currentPage + 1} of {totalPages}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Reader Content */}
      <main className="flex-1 flex items-center justify-center p-4 relative">
        {/* Current Page */}
        <div className="relative max-w-4xl w-full aspect-[2/3] bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        {currentPage > 0 && (
          <Button
            onClick={goToPrevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
        )}

        {currentPage < totalPages - 1 && (
          <Button
            onClick={goToNextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10"
            size="icon"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        )}
      </main>

      {/* Footer Controls */}
      <footer className="sticky bottom-0 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              variant="outline"
              className="border-white/10 text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {/* Page Indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              variant="outline"
              className="border-white/10 text-white hover:bg-white/10 disabled:opacity-30"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <p className="text-center text-white/40 text-xs mt-4">
            Use arrow keys or buttons to navigate • Press ESC to exit
          </p>
        </div>
      </footer>
    </div>
  );
}



