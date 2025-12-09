"use client";

import { Comic } from "@/lib/comics-data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart, Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";

interface ComicCardProps {
  comic: Comic;
}

export default function ComicCard({ comic }: ComicCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(comic);
    toast.success(`${comic.title} added to cart!`, {
      duration: 2000,
    });
  };

  return (
    <Link href={`/comic/${comic.id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
        {/* Cover Image */}
        <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
          <Image
            src={comic.coverImageUrl}
            alt={comic.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {comic.isFree && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
                FREE
              </Badge>
            )}
            {comic.isBestseller && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-0 shadow-lg">
                BESTSELLER
              </Badge>
            )}
            {comic.isFeatured && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                FEATURED
              </Badge>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
            <Button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-500/50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
            {comic.title}
          </h3>
          
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/60">{comic.genre}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">{comic.publicationYear}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {comic.isFree ? "FREE" : `$${comic.price.toFixed(2)}`}
            </span>
            {comic.isFree && (
              <Button
                variant="ghost"
                size="sm"
                className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
              >
                <Book className="h-4 w-4 mr-1" />
                Read
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
