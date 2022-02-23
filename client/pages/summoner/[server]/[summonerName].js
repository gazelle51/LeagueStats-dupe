import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

import { useRouter } from 'next/router';

export default function Summoner() {
  const router = useRouter();
  const { server, summonerName } = router.query;

  return (
    <div>
      <Navbar />
      <div>
        {server}, {summonerName}
      </div>
      <Footer />
    </div>
  );
}
