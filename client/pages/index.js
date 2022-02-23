import Link from 'next/link';
import { FooterText } from '../components/FooterText';

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

      <footer className='absolute w-screen bottom-0 pb-4 leading-tight text-center text-blue-300 text-xxs'>
        <FooterText />
      </footer>
    </div>
  );
}
