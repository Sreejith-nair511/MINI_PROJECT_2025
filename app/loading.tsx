export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-spin">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">Loading StudyMate...</h2>
        <p className="text-gray-300">Preparing your study environment</p>
      </div>
    </div>
  )
}
