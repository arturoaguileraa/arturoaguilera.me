'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirige automáticamente a /es cuando se accede a /
        router.push('/es');
    }, [router]);

    return null;  // No renderiza nada, solo realiza la redirección
}
