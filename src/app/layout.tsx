export default function RootLayout(props: {
  children: React.ReactNode;
  topLayer: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{props.children}</div>
        <div>{props.topLayer}</div>
      </body>
    </html>
  );
}
