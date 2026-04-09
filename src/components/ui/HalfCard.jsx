export default function HalfCard({ image, title, context, className, reverse }) {
  return (
    <article
      className={`mt-5 aspect-video w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-white shadow hover:cursor-pointer hover:border-2 hover:border-blue-500 ${className ?? ''}`}
    >
      <div
        className={`grid h-full w-full grid-rows-2 md:grid-rows-1 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
      >
        <div className="relative h-full w-full">
          <img src={image} alt={title ?? ''} className="h-full w-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 hover:bg-black/10" />
        </div>

        <div className="flex h-full w-full flex-col justify-center p-4 sm:p-6">
          {title ? <h3 className="text-base font-bold sm:text-lg lg:text-xl">{title}</h3> : null}
          {context ? <p className="mt-2 text-sm text-slate-700 sm:text-base">{context}</p> : null}
        </div>
      </div>
    </article>
  )
}

