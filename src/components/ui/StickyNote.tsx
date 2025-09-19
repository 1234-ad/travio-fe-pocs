export default function StickyNote() {
  return (
    <div className="w-80 h-80 bg-yellow-200 rounded-lg shadow-lg flex items-center justify-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="text-center p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">background</h3>
        <p className="text-gray-600 text-sm">
          This sticky note represents the background element from your design.
          You can customize this content as needed.
        </p>
      </div>
    </div>
  );
}