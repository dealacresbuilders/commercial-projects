// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFA6A6] border-r-[#ff8f8f] animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#FFA6A6] rounded-full animate-pulse shadow-lg shadow-[rgba(255,166,166,0.6)]"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#FFA6A6] font-semibold text-lg tracking-wide">
          Loading Commercial Property Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-400 text-center max-w-xs">
          Please wait while we fetch verified investment insights and property information.
        </p>

      </div>
    </div>
  );
}