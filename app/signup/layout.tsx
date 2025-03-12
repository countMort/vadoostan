export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBlockStart: 70,
      }}
    >
      <div style={{ width: '340px' }}>{children}</div>
    </div>
  );
}
