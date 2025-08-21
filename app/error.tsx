'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          We encountered an unexpected error. This might be a temporary issue or something that needs attention.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try again</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
            <span>Go back home</span>
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-200">
              Error details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-black/20 rounded-lg text-xs text-gray-300 overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
