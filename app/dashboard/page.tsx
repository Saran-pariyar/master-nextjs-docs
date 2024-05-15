"use client"

import { usePathname } from 'next/navigation'

export default function Page() {

    const pathname = usePathname()

    return  (
    <main>
    <h1>Hello, Next.js!</h1>
    <p></p>
    {pathname === '/dashboard' && <p>This is visible cause you're in dashboard route</p>}
    </main>
    )
  }