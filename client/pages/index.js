import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Search for a summoner</h1>

      <div>
        <Link href='/summoner/oce/gazelle51'>
          <a>OCE/gazelle51</a>
        </Link>
        <br />
        <Link href='/summoner/oce/Iooch'>
          <a>OCE/Iooch</a>
        </Link>
      </div>
    </div>
  );
}
