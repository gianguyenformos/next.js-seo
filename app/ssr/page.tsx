import { getData } from '@/app/lib/data'

export const dynamic = 'force-dynamic'

export default async function SSRPage() {
  const data = await getData()

  return (
    <div>
      <h1>SSR Render (no-cache)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
