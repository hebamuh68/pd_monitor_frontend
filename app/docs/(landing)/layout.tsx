export default function DocsLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', background: '#0f172a', color: '#fff' }}>
        <h2>🎙️ Docs of Voice Monitor Service Control Panel</h2>
      </header>
      
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}