export default function FeatureCard({ judulnya, gambarnya, optional }) {
  return (
    <div className="bg-white hover:cursor-pointer hover:border-2 hover:border-blue-500 text-slate-800 shadow rounded-2xl w-50 h-50 mt-25 grid justify-center md:w-30 md:h-35 sm:w-30 sm:h-30 lg:w-40 lg:h-40 xl:w-50 xl:h-50">
      <div className="grid justify-center items-center w-full">
        <img
          src={gambarnya}
          alt=""
          width={50}
          className="bg-blue-700 rounded-xl p-1 text-white sm:w-15 mt-8 xl:w-20"
        />
      </div>
      <h2 className="text-center sm:text-xl mt-5">{judulnya}</h2>
      {optional}
    </div>
  )
}
