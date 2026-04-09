export default function ProgramCard({ image, context, title }) {
  return (
    <article className="flex h-auto w-full items-center gap-4 rounded-2xl bg-white p-4 shadow hover:cursor-pointer hover:border-2 hover:border-blue-500">
      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-blue-700 sm:h-20 sm:w-20">
        <img src={image} alt="" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
      </div>
      <div className="grid gap-2">
        <h2 className="text-base font-bold sm:text-lg lg:text-xl">{title}</h2>
        <p className="text-sm text-slate-700">{context}</p>
      </div>
    </article>
  )
}
