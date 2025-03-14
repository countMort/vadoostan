import classes from './style.module.scss';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes['layout-wrapper']}>
      <div style={{ width: '340px' }}>{children}</div>
    </div>
  );
}
