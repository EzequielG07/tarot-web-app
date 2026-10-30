// src/app/admin/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                router.replace('/admin/dashboard');
            } else {
                router.replace('/admin/login');
            }
        };
        checkAuth();
    }, [router]);

    return (
        <div className="min-h-screen bg-bg-main flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-btn-light border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-serif text-text-light/70 tracking-widest uppercase">
                    Cargando panel de administración...
                </p>
            </div>
        </div>
    );
}

