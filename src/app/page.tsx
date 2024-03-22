import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/slots">/slots</Link>
        </li>
        <li>
          <Link href="/slots/meow">/slots/meow</Link>
        </li>
      </ul>
    </>
  );
}
