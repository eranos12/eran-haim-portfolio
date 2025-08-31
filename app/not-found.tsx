export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-darkBlue-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
