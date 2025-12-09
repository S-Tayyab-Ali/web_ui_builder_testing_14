"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { comics } from "@/lib/comics-data";
import { addToCart } from "@/lib/cart";
import { ShoppingCart, ArrowLeft, Book, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import ComicCard from "@/components/comic-card";

export default function ComicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const comicId = params.id as string;

  const comic = comics.find((c) => c.id === comicId);

  if (!comic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Comic not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(comic);
    toast.success(`${comic.title} added to cart!`);
  };

  const relatedComics = comics
    .filter(
      (c) =>
        c.id !== comic.id &&
        (c.characterTags.some((tag) => comic.characterTags.includes(tag)) ||
          c.seriesName === comic.seriesName)
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="text-white/60 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Cover Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl shadow-blue-500/20">
                <Image
                  src={comic.coverImageUrl}
                  alt={comic.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {comic.isFree && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg text-sm">
                    FREE
                  </Badge>
                )}
                {comic.isBestseller && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-0 shadow-lg text-sm">
                    BESTSELLER
                  </Badge>
                )}
                {comic.isFeatured && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg text-sm">
                    FEATURED
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Comic Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {comic.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-white/20 text-white/80">
                  {comic.genre}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">
                  {comic.publicationYear}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">
                  {comic.rating}
                </Badge>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{comic.pageCount} pages</span>
                </div>
                {comic.isBestseller && (
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <span className="text-sm font-medium">Bestseller</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg leading-relaxed">
                {comic.description}
              </p>
            </div>

            {/* Series & Characters */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-white/60 mb-2">Series</h3>
                <p className="text-white font-medium">{comic.seriesName}</p>
                {comic.issueNumber && (
                  <p className="text-white/60 text-sm">Issue #{comic.issueNumber}</p>
                )}
              </div>

              <div>
                <h3 className="text-sm font-medium text-white/60 mb-2">Featured Characters</h3>
                <div className="flex flex-wrap gap-2">
                  {comic.characterTags.map((character) => (
                    <Badge
                      key={character}
                      className="bg-white/5 text-white border-white/10 hover:bg-white/10"
                    >
                      {character}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {comic.isFree ? "FREE" : `$${comic.price.toFixed(2)}`}
                </span>
                {!comic.isFree && (
                  <span className="text-white/40 text-sm">Digital Edition</span>
                )}
              </div>

              <div className="flex gap-4">
                {comic.isFree ? (
                  <Link href={`/reader/${comic.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 transform hover:scale-105 transition-all duration-300 h-12 text-lg">
                      <Book className="h-5 w-5 mr-2" />
                      Read Free
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transform hover:scale-105 transition-all duration-300 h-12 text-lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Comics */}
        {relatedComics.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedComics.map((relatedComic) => (
                <ComicCard key={relatedComic.id} comic={relatedComic} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
