import Header from '../../components/layout/Header'

export default function PpdbPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900">PPDB</h1>
        <p className="text-slate-600 mt-2">Konten halaman PPDB dapat ditambahkan di sini.</p>
      </main>
    </div>
  )
}
