export default function LoadingPanel() {
  return (
    <div className="fixed inset-0 bg-ink flex items-center justify-center z-40">
      <div className="manga-panel p-12 text-center">
        <div className="speed-burst" />
        <p className="font-manga text-5xl text-accent sfx-text animate-pulse relative z-10">
          LOADING...
        </p>
        <div className="mt-4 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
