export default function BigCard({
  image,
  title,
  subtitle,
  text,
  italicText,
  className,
  reverse,
}) {
  return (
    <article
      className={`mt-4 w-full overflow-hidden rounded-2xl bg-white shadow ${className ?? ''}`}
    >
      <div className={`grid grid-cols-1 items-stretch gap-6 p-5 md:grid-cols-2 md:gap-10 md:p-8`}>
        <div className={`${reverse ? 'md:order-2' : ''}`}>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <img src={image} alt={title ?? ''} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className={`${reverse ? 'md:order-1' : ''}`}>
          <div className="max-w-prose">
            {(title || subtitle) ? (
              <h3 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {title}
                {subtitle ? <span className="block italic font-semibold">{subtitle}</span> : null}
              </h3>
            ) : null}

            {text ? <p className="mt-4 text-sm leading-relaxed text-slate-800 sm:text-base">{text}</p> : null}

            {italicText ? (
              <p className="mt-4 text-sm italic leading-relaxed text-slate-700 sm:text-base">
                {italicText}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

