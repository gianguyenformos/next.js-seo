'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password, rememberMe: false }),
    });
    if (res.ok) {
      router.replace('/dashboard'); // or wherever
      return;
    }

    const data = await res.json().catch(() => ({}));
    setError(data.message || 'Login failed');
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>

      <form onSubmit={login}>
        <div>
          <label>Email</label><br/>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>

        <div>
          <label>Password</label><br/>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
