'use client'

import { useEffect, useState } from 'react'

export default function CSRPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div>
      <h1>CSR Render</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}
