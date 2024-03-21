import React from 'react';

export default function Layout({
  children,
  topLayer,
}: {
  children: React.ReactNode;
  topLayer: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{topLayer}</div>
    </>
  );
}
