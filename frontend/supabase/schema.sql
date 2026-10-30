-- Script de Creación y Semilla de Datos para Anita Tarot
-- Ejecutar en Supabase -> SQL Editor -> New Query -> Run

-- 1. Crear tabla de precios y servicios
CREATE TABLE IF NOT EXISTS public.servicios_precios (
    id VARCHAR(100) PRIMARY KEY,
    categoria VARCHAR(100) NOT NULL,
    servicio_nombre VARCHAR(150) NOT NULL,
    opcion_nombre VARCHAR(150),
    duracion VARCHAR(50) NOT NULL,
    precio_ars NUMERIC(10, 2) NOT NULL,
    precio_usd NUMERIC(10, 2) NOT NULL,
    orden INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.servicios_precios ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de seguridad:
-- Cualquier visitante (anónimo o autenticado) puede LEER los precios en la web
CREATE POLICY "Permitir lectura publica de precios" 
ON public.servicios_precios FOR SELECT 
USING (true);

-- Solo usuarios AUTENTICADOS (el administrador) pueden MODIFICAR los precios
CREATE POLICY "Permitir modificacion solo a usuarios autenticados" 
ON public.servicios_precios FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Permitir insercion solo a usuarios autenticados" 
ON public.servicios_precios FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Permitir eliminacion solo a usuarios autenticados" 
ON public.servicios_precios FOR DELETE 
TO authenticated 
USING (true);

-- 4. Cargar datos iniciales (Seed Data)
INSERT INTO public.servicios_precios (id, categoria, servicio_nombre, opcion_nombre, duracion, precio_ars, precio_usd, orden)
VALUES
-- Lecturas & Orientación
('orientacion-express', 'Lecturas & Orientación', 'Orientación Express', 'Consulta rápida puntual', '15 min', 19900, 15, 1),
('lectura-claridad', 'Lecturas & Orientación', 'Lectura de Claridad', 'Sesión focalizada', '30 min', 35000, 30, 2),
('sesion-integral-claridad', 'Lecturas & Orientación', 'Sesión Integral de Claridad', 'Consulta completa Videncia + Tarot', '50 min', 50000, 50, 3),
('diagnostico-energetico-profundo', 'Lecturas & Orientación', 'Diagnóstico Energético y Lectura Profunda', 'Evaluación integral', '50 min', 60000, 60, 4),
('diagnostico-sesion-armonizacion', 'Lecturas & Orientación', 'Diagnóstico + Sesión de Armonización', 'Experiencia Premium', '1 hr 30 min', 80000, 80, 5),

-- Limpiezas, Armonización & Magia
('limpieza-armonizacion-30', 'Limpiezas & Magia', 'Limpieza, Armonización y Protección', 'Sesión corta 30 min', '30 min', 45000, 30, 6),
('limpieza-armonizacion-50', 'Limpiezas & Magia', 'Limpieza, Armonización y Protección', 'Sesión profunda 50 min', '50 min', 60000, 50, 7),
('limpieza-destrabe-caminos', 'Limpiezas & Magia', 'Limpieza, Destrabe y Apertura de Caminos', 'Apertura integral', '50 min', 60000, 55, 8),
('limpieza-espacios', 'Limpiezas & Magia', 'Limpieza y Armonización de Espacios', 'Hogares y negocios', '50 min', 60000, 60, 9),
('banos-limpias-desbloqueo', 'Limpiezas & Magia', 'Baños y Limpias de Desbloqueo', 'Descarga y protección', '50 min', 60000, 60, 10),
('parapsicologia-integral', 'Limpiezas & Magia', 'Parapsicología Integral', 'Consulta personalizada', '50 min', 60000, 60, 11),
('sanaciones-ancestrales', 'Limpiezas & Magia', 'Sanaciones Ancestrales', 'Linaje y corte de lazos', '50 min', 60000, 60, 12),
('alta-magia-ritual', 'Limpiezas & Magia', 'Alta Magia Ritual y Psíquica', 'Trabajo a medida', '50 min', 60000, 60, 13),
('clarividencia-activa', 'Limpiezas & Magia', 'Clarividencia Activa', 'Exploración intuitiva', '50 min', 60000, 60, 14),

-- Reiki & Terapias Holísticas
('reiki-usui-50', 'Reiki & Terapias Holísticas', 'Reiki Usui Tradicional', 'Sesión 50 min', '50 min', 50000, 50, 15),
('reiki-usui-80', 'Reiki & Terapias Holísticas', 'Reiki Usui Tradicional', 'Sesión 1 hr 20 min', '1 hr 20 min', 65000, 70, 16),
('alineacion-chakras-50', 'Reiki & Terapias Holísticas', 'Alineación de Chakras y Armonización Vital', 'Sesión 50 min', '50 min', 50000, 50, 17),
('alineacion-chakras-80', 'Reiki & Terapias Holísticas', 'Alineación de Chakras y Armonización Vital', 'Sesión 1 hr 20 min', '1 hr 20 min', 65000, 70, 18),
('karmic-reiki-50', 'Reiki & Terapias Holísticas', 'Karmic Reiki', 'Liberación de lazos (50 min)', '50 min', 50000, 50, 19),
('karmic-reiki-80', 'Reiki & Terapias Holísticas', 'Karmic Reiki', 'Liberación de lazos (80 min)', '1 hr 20 min', 65000, 70, 20),
('karuna-reiki-50', 'Reiki & Terapias Holísticas', 'Karuna Reiki', 'Sanación compasiva (50 min)', '50 min', 50000, 50, 21),
('karuna-reiki-80', 'Reiki & Terapias Holísticas', 'Karuna Reiki', 'Sanación compasiva (80 min)', '1 hr 20 min', 65000, 70, 22),
('reiki-jin-kei-do-50', 'Reiki & Terapias Holísticas', 'Reiki Jin Kei Do', 'Sabiduría en movimiento (50 min)', '50 min', 50000, 50, 23),
('reiki-jin-kei-do-80', 'Reiki & Terapias Holísticas', 'Reiki Jin Kei Do', 'Sabiduría en movimiento (80 min)', '1 hr 20 min', 65000, 70, 24),
('hara-reiki-50', 'Reiki & Terapias Holísticas', 'Hará Reiki', 'Centro de poder vital (50 min)', '50 min', 50000, 50, 25),
('hara-reiki-80', 'Reiki & Terapias Holísticas', 'Hará Reiki', 'Centro de poder vital (80 min)', '1 hr 20 min', 65000, 70, 26),
('reiki-arcangeles-50', 'Reiki & Terapias Holísticas', 'Reiki con Arcángeles', 'Sintonía de luz (50 min)', '50 min', 50000, 50, 27),
('reiki-arcangeles-80', 'Reiki & Terapias Holísticas', 'Reiki con Arcángeles', 'Sintonía de luz (80 min)', '1 hr 20 min', 65000, 70, 28),
('apertura-tercer-ojo', 'Reiki & Terapias Holísticas', 'Apertura del Tercer Ojo', 'Visión interior (50 min)', '50 min', 60000, 60, 29),
('reiki-ninos-50', 'Reiki & Terapias Holísticas', 'Reiki para Niños y Adolescentes', 'Sesión 50 min', '50 min', 50000, 50, 30),
('reiki-ninos-80', 'Reiki & Terapias Holísticas', 'Reiki para Niños y Adolescentes', 'Sesión 1 hr 20 min', '1 hr 20 min', 65000, 70, 31),
('reiki-mascotas-30', 'Reiki & Terapias Holísticas', 'Reiki para Mascotas', 'Sesión 30 min', '30 min', 35000, 40, 32),
('reiki-mascotas-50', 'Reiki & Terapias Holísticas', 'Reiki para Mascotas', 'Sesión 50 min', '50 min', 50000, 50, 33),

-- Secciones Destacadas
('experiencia-cuantica', 'Experiencias Destacadas', 'Experiencia Cuántica de Armonización', 'Tarjeta expandida', '50 min', 60000, 60, 34),
('blog-sesion-integral', 'Experiencias Destacadas', 'Sesión Integral de Claridad (Blog)', 'Tarjeta en Blog', '50 min', 50000, 50, 35)

ON CONFLICT (id) DO UPDATE SET
    categoria = EXCLUDED.categoria,
    servicio_nombre = EXCLUDED.servicio_nombre,
    opcion_nombre = EXCLUDED.opcion_nombre,
    duracion = EXCLUDED.duracion,
    precio_ars = EXCLUDED.precio_ars,
    precio_usd = EXCLUDED.precio_usd,
    orden = EXCLUDED.orden,
    updated_at = timezone('utc'::text, now());

