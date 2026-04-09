export default function ImageOverlayCard({ image, title, shortText, hoverText, className }) {
  return (
    <article
      className={`group relative w-full overflow-hidden rounded-2xl shadow hover:cursor-pointer ${className ?? ''}`}
    >
      <div className="aspect-video w-full">
        <img src={image} alt={title ?? ''} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/60" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="rounded-xl bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-200 group-hover:bg-black/40">
          {title ? <h3 className="text-base font-bold sm:text-lg">{title}</h3> : null}

          {shortText ? (
            <p className={`mt-1 text-sm ${hoverText ? 'group-hover:hidden' : ''}`}>{shortText}</p>
          ) : null}

          {hoverText ? (
            <p className="mt-1 hidden text-sm leading-relaxed group-hover:block">{hoverText}</p>
          ) : null}
        </div>
      </div>
    </article>
  )
}

