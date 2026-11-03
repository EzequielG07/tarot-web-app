-- ========================================================
-- TABLA Y POLÍTICAS DE SEGURIDAD (RLS) PARA SUSCRIPTORES
-- ========================================================

-- 1. Crear tabla de suscriptores
CREATE TABLE IF NOT EXISTS public.suscriptores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(150) NOT NULL,
    celular VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    activo BOOLEAN DEFAULT true NOT NULL
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.suscriptores ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de seguridad:

-- A. Cualquier visitante de la web (anónimo o autenticado) puede registrarse (INSERT)
CREATE POLICY "Permitir suscripcion publica" 
ON public.suscriptores FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- B. Solo usuarios autenticados (el administrador) pueden leer/ver los suscriptores (SELECT)
CREATE POLICY "Permitir ver suscriptores solo a administradores" 
ON public.suscriptores FOR SELECT 
TO authenticated 
USING (true);

-- C. Solo usuarios autenticados pueden eliminar registros falsos o spam (DELETE)
CREATE POLICY "Permitir eliminar suscriptores solo a administradores" 
ON public.suscriptores FOR DELETE 
TO authenticated 
USING (true);

-- D. Solo usuarios autenticados pueden actualizar estados (UPDATE)
CREATE POLICY "Permitir actualizar suscriptores solo a administradores" 
ON public.suscriptores FOR UPDATE 
TO authenticated 
USING (true);

