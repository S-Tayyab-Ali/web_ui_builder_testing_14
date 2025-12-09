"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { getCart, removeFromCart, updateQuantity, clearCart, getCartTotal, CartItem } from "@/lib/cart";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCart());
      setIsLoading(false);
    };

    loadCart();

    const handleCartUpdate = () => {
      setCartItems(getCart());
    };

    window.addEventListener("cart-updated", handleCartUpdate);
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  const handleRemoveItem = (comicId: string, title: string) => {
    removeFromCart(comicId);
    toast.success(`${title} removed from cart`);
  };

  const handleUpdateQuantity = (comicId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(comicId, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1; // 10% tax for demo
  const total = subtotal + tax;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-white/60">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <ShoppingBag className="h-24 w-24 mx-auto text-white/20" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">Your cart is empty</h1>
              <p className="text-white/60 text-lg">
                Discover amazing DC Comics and add them to your collection
              </p>
            </div>

            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transform hover:scale-105 transition-all duration-300">
                Browse Comics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    Clear Cart
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-slate-900 border-white/10">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Clear Cart?</AlertDialogTitle>
                    <AlertDialogDescription className="text-white/60">
                      This will remove all items from your cart. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleClearCart}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Clear Cart
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.comic.id}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    {/* Comic Cover */}
                    <Link href={`/comic/${item.comic.id}`} className="shrink-0">
                      <div className="relative w-24 h-36 rounded-lg overflow-hidden">
                        <Image
                          src={item.comic.coverImageUrl}
                          alt={item.comic.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>

                    {/* Comic Info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <Link href={`/comic/${item.comic.id}`}>
                        <h3 className="font-semibold text-white hover:text-blue-400 transition-colors line-clamp-2">
                          {item.comic.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-white/60">{item.comic.genre} • {item.comic.publicationYear}</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        ${item.comic.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.comic.id, item.comic.title)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleUpdateQuantity(item.comic.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 hover:bg-white/10"
                        >
                          <Minus className="h-3 w-3 text-white" />
                        </Button>
                        <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleUpdateQuantity(item.comic.id, item.quantity + 1)}
                          className="h-8 w-8 hover:bg-white/10"
                        >
                          <Plus className="h-3 w-3 text-white" />
                        </Button>
                      </div>

                      <p className="text-sm font-medium text-white">
                        ${(item.comic.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="sticky top-24 rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 space-y-6">
              <h2 className="text-xl font-bold text-white">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transform hover:scale-105 transition-all duration-300 h-12">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/">
                <Button variant="ghost" className="w-full text-white/60 hover:text-white hover:bg-white/10">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
