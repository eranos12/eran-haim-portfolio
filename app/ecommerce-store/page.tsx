"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart, Star, Search, Filter, Grid, List, ChevronDown, Plus, Minus, Eye, Share2, Truck, Shield, RefreshCw, CreditCard, Package, Users, TrendingUp } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export default function EcommerceStorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const categories: Category[] = [
    { id: "all", name: "All Products", count: 48, icon: "🛍️" },
    { id: "electronics", name: "Electronics", count: 12, icon: "📱" },
    { id: "fashion", name: "Fashion", count: 18, icon: "👕" },
    { id: "home", name: "Home & Garden", count: 8, icon: "🏠" },
    { id: "sports", name: "Sports", count: 6, icon: "⚽" },
    { id: "books", name: "Books", count: 4, icon: "📚" }
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://picsum.photos/seed/headphones/400/400",
      rating: 4.8,
      reviews: 1247,
      category: "electronics",
      tags: ["Wireless", "Bluetooth", "Noise Cancelling"],
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: "2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "https://picsum.photos/seed/tshirt/400/400",
      rating: 4.6,
      reviews: 892,
      category: "fashion",
      tags: ["Cotton", "Premium", "Comfortable"],
      inStock: true,
      isFeatured: true
    },
    {
      id: "3",
      name: "Smart Home Security Camera",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://picsum.photos/seed/camera/400/400",
      rating: 4.7,
      reviews: 567,
      category: "electronics",
      tags: ["Smart Home", "Security", "1080p"],
      inStock: true,
      isNew: true
    },
    {
      id: "4",
      name: "Organic Coffee Beans",
      price: 24.99,
      image: "https://picsum.photos/seed/coffee/400/400",
      rating: 4.9,
      reviews: 2341,
      category: "home",
      tags: ["Organic", "Premium", "Fresh"],
      inStock: true,
      isFeatured: true
    },
    {
      id: "5",
      name: "Fitness Tracker Watch",
      price: 79.99,
      image: "https://picsum.photos/seed/watch/400/400",
      rating: 4.5,
      reviews: 678,
      category: "sports",
      tags: ["Fitness", "Heart Rate", "GPS"],
      inStock: false
    },
    {
      id: "6",
      name: "Design Thinking Book",
      price: 19.99,
      originalPrice: 24.99,
      image: "https://picsum.photos/seed/book/400/400",
      rating: 4.8,
      reviews: 445,
      category: "books",
      tags: ["Design", "Business", "Innovation"],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    }
  });

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                <div className="p-1 rounded-lg bg-slate-100 group-hover:bg-blue-100 transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-medium">Back to Portfolio</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-800">
                  E-commerce Store
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-slate-100 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 focus:bg-white"
                />
              </div>
              
              {/* Cart */}
              <div className="relative">
                <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full px-6 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-600">Modern E-commerce Solution</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Premium Shopping
            <br />
            <span className="text-blue-600">Experience</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A fully-featured e-commerce platform with modern design, seamless user experience,
            and powerful functionality. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">48</div>
              <div className="text-slate-600">Products</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">6</div>
              <div className="text-slate-600">Categories</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">4.8</div>
              <div className="text-slate-600">Avg Rating</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 lg:flex-col lg:w-64">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                      : "bg-white/60 border-slate-200/60 text-slate-700 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Products Section */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-blue-500 text-white"
                        : "bg-white/60 text-slate-600 hover:bg-blue-50"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-blue-500 text-white"
                        : "bg-white/60 text-slate-600 hover:bg-blue-50"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1"></div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/60 border border-slate-200/60 rounded-lg text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}>
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {/* Product Image */}
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                            NEW
                          </span>
                        )}
                        {product.isFeatured && (
                          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                            wishlist.includes(product.id)
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-white/90 text-slate-600 hover:bg-white"
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-current" : ""}`} />
                        </button>
                        <button className="p-2 rounded-full bg-white/90 text-slate-600 shadow-lg hover:bg-white transition-all duration-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-full bg-white/90 text-slate-600 shadow-lg hover:bg-white transition-all duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Stock Status */}
                      {!product.inStock && (
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            OUT OF STOCK
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-slate-800 text-lg leading-tight">
                          {product.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-800">
                            ${product.price}
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-slate-500 line-through">
                              ${product.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                            product.inStock
                              ? "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
                              : "bg-slate-200 text-slate-400 cursor-not-allowed"
                          }`}
                        >
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Products Message */}
              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">
                    No products found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/60 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose Our Store?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices for a seamless shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Fast Shipping</h3>
              <p className="text-slate-600 text-sm">
                Free shipping on orders over $50
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Payment</h3>
              <p className="text-slate-600 text-sm">
                SSL encrypted payment processing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Easy Returns</h3>
              <p className="text-slate-600 text-sm">
                30-day money-back guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Multiple Payment</h3>
              <p className="text-slate-600 text-sm">
                Credit cards, PayPal, Apple Pay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/60 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">
            Built with Next.js, TypeScript, and Tailwind CSS • Created by Eran Haim
          </p>
        </div>
      </footer>
    </main>
  );
}
