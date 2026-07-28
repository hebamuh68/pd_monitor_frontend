export default function DocsTopicLayout({
    children,
}:{
    children: React.ReactNode
}){
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}