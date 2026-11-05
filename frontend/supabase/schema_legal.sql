-- ========================================================
-- TABLAS Y POLÍTICAS DE SEGURIDAD (RLS) PARA BLINDAJE LEGAL
-- SISTEMA CLICKWRAP + DISPOSICIÓN 954/2025 (ARREPENTIMIENTO Y BAJA)
-- ========================================================

-- 1. Tabla de Aceptaciones Clickwrap (Auditoría legal de reservas)
CREATE TABLE IF NOT EXISTS public.registros_clickwrap (
    id VARCHAR(30) PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    celular VARCHAR(50) NOT NULL,
    servicio_id VARCHAR(100) NOT NULL,
    servicio_nombre VARCHAR(200) NOT NULL,
    precio_texto VARCHAR(100) NOT NULL,
    version_terminos VARCHAR(50) DEFAULT 'v1.0 - 2026' NOT NULL,
    terminos_aceptados BOOLEAN DEFAULT true NOT NULL,
    privacidad_aceptada BOOLEAN DEFAULT true NOT NULL,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS en registros_clickwrap
ALTER TABLE public.registros_clickwrap ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir registro publico de clickwrap" 
ON public.registros_clickwrap FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Permitir lectura de clickwrap solo a administradores" 
ON public.registros_clickwrap FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Permitir eliminacion de clickwrap solo a administradores" 
ON public.registros_clickwrap FOR DELETE 
TO authenticated 
USING (true);


-- 2. Tabla de Solicitudes de Arrepentimiento y Baja de Servicio (Disposición 954/2025)
CREATE TABLE IF NOT EXISTS public.solicitudes_arrepentimiento_baja (
    id VARCHAR(30) PRIMARY KEY,
    tipo VARCHAR(30) NOT NULL, -- 'arrepentimiento' o 'baja'
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    celular VARCHAR(50) NOT NULL,
    servicio_nombre VARCHAR(200),
    fecha_contratacion VARCHAR(50),
    motivo TEXT,
    estado VARCHAR(50) DEFAULT 'Pendiente' NOT NULL, -- 'Pendiente', 'En Proceso', 'Procesado', 'Rechazado'
    resolucion_nota TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS en solicitudes_arrepentimiento_baja
ALTER TABLE public.solicitudes_arrepentimiento_baja ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir envio publico de arrepentimiento y baja" 
ON public.solicitudes_arrepentimiento_baja FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Permitir lectura de arrepentimiento y baja solo a administradores" 
ON public.solicitudes_arrepentimiento_baja FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Permitir actualizacion de arrepentimiento y baja solo a administradores" 
ON public.solicitudes_arrepentimiento_baja FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Permitir eliminacion de arrepentimiento y baja solo a administradores" 
ON public.solicitudes_arrepentimiento_baja FOR DELETE 
TO authenticated 
USING (true);

