'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Ensure cookies are included
    });
    router.push('/login');
    router.refresh();
  };

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleLogout();
      }}
      style={{
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginTop: '1rem',
        display: 'inline-block'
      }}
    >
      Logout
    </a>
  );
}
