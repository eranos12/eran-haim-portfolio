"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Image, Sparkles, Download, Share2, Heart, RefreshCw, Palette, Zap, Eye, Settings, Wand2, Camera, Layers } from "lucide-react";

interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: Date;
  likes: number;
  downloads: number;
}

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("realistic");
  const [selectedSize, setSelectedSize] = useState("1024x1024");
  const [selectedQuality, setSelectedQuality] = useState("standard");

  const styles = [
    { id: "realistic", name: "Realistic", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { id: "artistic", name: "Artistic", icon: "🖼️", color: "from-blue-500 to-cyan-500" },
    { id: "cartoon", name: "Cartoon", icon: "🎭", color: "from-green-500 to-emerald-500" },
    { id: "anime", name: "Anime", icon: "🌸", color: "from-pink-500 to-rose-500" },
    { id: "cyberpunk", name: "Cyberpunk", icon: "🤖", color: "from-orange-500 to-red-500" },
    { id: "fantasy", name: "Fantasy", icon: "🐉", color: "from-indigo-500 to-purple-500" }
  ];

  const sizes = [
    { id: "512x512", name: "512×512", desc: "Fast generation" },
    { id: "1024x1024", name: "1024×1024", desc: "Standard quality" },
    { id: "1792x1024", name: "1792×1024", desc: "Wide format" },
    { id: "1024x1792", name: "1024×1792", desc: "Portrait format" }
  ];

  const qualities = [
    { id: "draft", name: "Draft", desc: "25 credits", color: "from-gray-500 to-gray-600" },
    { id: "standard", name: "Standard", desc: "50 credits", color: "from-blue-500 to-blue-600" },
    { id: "hd", name: "HD", desc: "100 credits", color: "from-purple-500 to-purple-600" }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Math.random().toString(36).substr(2, 9),
        prompt,
        imageUrl: `https://picsum.photos/seed/${Math.random()}/1024/1024`,
        timestamp: new Date(),
        likes: Math.floor(Math.random() * 50),
        downloads: Math.floor(Math.random() * 20)
      };
      
      setGeneratedImages([newImage, ...generatedImages]);
      setIsGenerating(false);
    }, 3000);
  };

  const handleLike = (imageId: string) => {
    setGeneratedImages(images => 
      images.map(img => 
        img.id === imageId ? { ...img, likes: img.likes + 1 } : img
      )
    );
  };

  const handleDownload = (imageId: string) => {
    setGeneratedImages(images => 
      images.map(img => 
        img.id === imageId ? { ...img, downloads: img.downloads + 1 } : img
      )
    );
    // In real app, trigger actual download
  };

  const canGenerate = prompt.trim().length > 0 && !isGenerating;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-purple-500/30 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-purple-300 hover:text-pink-400 transition-colors duration-200 group"
              >
                <div className="p-1 rounded-lg bg-purple-500/20 group-hover:bg-pink-500/20 transition-colors duration-200 border border-purple-500/30">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-medium">Back to Portfolio</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-purple-500/30"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">
                  AI Image Generator
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
              <Zap className="w-4 h-4 text-pink-400" />
              <span>Powered by DALL-E 3</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">AI-Powered Creativity</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Ideas
            </span>
            <br />
            <span className="text-white">Into Art</span>
          </h2>
          
          <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Describe your vision and watch as AI brings it to life. 
            Generate stunning images in multiple styles, from realistic to artistic, 
            powered by cutting-edge DALL-E 3 technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Controls */}
            <div className="xl:col-span-1 space-y-6">
              {/* Prompt Input */}
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
                  <Wand2 className="w-5 h-5 mr-2 text-pink-400" />
                  Describe Your Vision
                </h3>
                
                <div className="space-y-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A majestic dragon soaring over a cyberpunk city at sunset, digital art style..."
                    className="w-full h-32 px-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                  />
                  
                  <div className="text-sm text-purple-300">
                    {prompt.length}/1000 characters
                  </div>
                </div>
              </div>

              {/* Style Selection */}
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
                  <Palette className="w-5 h-5 mr-2 text-cyan-400" />
                  Choose Style
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-center ${
                        selectedStyle === style.id
                          ? `bg-gradient-to-r ${style.color} border-transparent text-white shadow-lg`
                          : "bg-black/40 border-purple-500/30 text-purple-300 hover:border-pink-500/50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{style.icon}</div>
                      <div className="text-sm font-medium">{style.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size & Quality */}
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
                  <Settings className="w-5 h-5 mr-2 text-green-400" />
                  Settings
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-300 mb-2">Image Size</label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    >
                      {sizes.map((size) => (
                        <option key={size.id} value={size.id}>
                          {size.name} - {size.desc}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-purple-300 mb-2">Quality</label>
                    <div className="space-y-2">
                      {qualities.map((quality) => (
                        <button
                          key={quality.id}
                          onClick={() => setSelectedQuality(quality.id)}
                          className={`w-full p-3 rounded-lg border transition-all duration-300 text-left ${
                            selectedQuality === quality.id
                              ? `bg-gradient-to-r ${quality.color} border-transparent text-white`
                              : "bg-black/40 border-purple-500/30 text-purple-300 hover:border-pink-500/50"
                          }`}
                        >
                          <div className="font-medium">{quality.name}</div>
                          <div className="text-sm opacity-80">{quality.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  canGenerate
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transform"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Image
                  </div>
                )}
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="xl:col-span-2">
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <h3 className="text-lg font-semibold mb-6 text-white">Generated Images</h3>
                
                {generatedImages.length > 0 ? (
                  <div className="space-y-6">
                    {generatedImages.map((image) => (
                      <div
                        key={image.id}
                        className="border border-purple-500/30 rounded-2xl overflow-hidden bg-black/20 hover:bg-black/30 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative group">
                          <img
                            src={image.imageUrl}
                            alt={image.prompt}
                            className="w-full h-auto object-cover"
                          />
                          
                          {/* Overlay Actions */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <button
                              onClick={() => handleDownload(image.id)}
                              className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                            >
                              <Download className="w-5 h-5 text-white" />
                            </button>
                            <button className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                              <Share2 className="w-5 h-5 text-white" />
                            </button>
                            <button
                              onClick={() => handleLike(image.id)}
                              className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110"
                            >
                              <Heart className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Image Info */}
                        <div className="p-4">
                          <p className="text-purple-200 mb-3 line-clamp-2">{image.prompt}</p>
                          
                          <div className="flex items-center justify-between text-sm text-purple-300">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Heart className="w-4 h-4 mr-1 text-pink-400" />
                                {image.likes}
                              </span>
                              <span className="flex items-center">
                                <Download className="w-4 h-4 mr-1 text-cyan-400" />
                                {image.downloads}
                              </span>
                            </div>
                            <span className="text-xs opacity-70">
                              {image.timestamp.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-purple-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                      <Camera className="w-12 h-12 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ready to Create</h3>
                    <p className="text-purple-300 max-w-md mx-auto">
                      Describe your vision, choose your style, and watch as AI transforms your ideas into stunning artwork.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-purple-500/30 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">
            Built with Next.js, TypeScript, and DALL-E 3 • Created by Eran Haim
          </p>
        </div>
      </footer>
    </main>
  );
}
