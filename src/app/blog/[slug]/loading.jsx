export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">

  <div className="flex flex-col items-center gap-5">

    {/* SPINNER */}
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-[#FFA6A6]/20"></div>

      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFA6A6] border-r-[#ff8f8f] animate-spin"></div>
    </div>

    {/* TEXT */}
    <p className="text-[#FFA6A6] text-sm tracking-wide animate-pulse font-medium">
      Loading amazing content...
    </p>

  </div>

</div>
  );
}