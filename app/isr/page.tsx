import { getData } from '@/app/lib/data'

export const revalidate = 10

export default async function ISRPage() {
  const data = await getData()

  return (
    <div>
      <h1>ISR Render (revalidate: 10s)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
