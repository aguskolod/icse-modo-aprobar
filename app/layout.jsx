export const metadata = {
  title: "ICSE - Modo aprobar",
  description: "Curso intensivo de ICSE con práctica y parciales reales."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
