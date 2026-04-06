export default function StatCard({ nama, isi }) {
  return (
    <div className="bg-white shadow w-25 h-25 rounded-2xl hyphens-auto whitespace-normal">
      <p className="text-2xl text-center text-blue-400 font-semibold">{nama}</p>
      <p className="text-center">{isi}</p>
    </div>
  )
}
