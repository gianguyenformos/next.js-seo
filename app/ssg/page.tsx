import { getData } from '@/app/lib/data'

export default async function SSGPage() {
  const data = await getData()

  return (
    <div>
      <h1>SSG Render (build-time)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
