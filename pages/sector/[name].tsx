import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

export default function Sector({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { name } = router.query;

  const levels = [
    { name: 'Tertiary', icon: 'school' },
    { name: 'Secondary', icon: 'account_balance' },
    { name: 'Primary', icon: 'menu_book' },
    { name: 'Pre-primary', icon: 'child_care' }
  ];

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {name}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={name as string} backLink="/" />

      <main className="content">
        <div className="sector-grid">
          {levels.map((level) => (
            <Link href={`/level/${level.name.toLowerCase()}`} key={level.name}>
              <a className="sector-item">
                <i className="material-icons">{level.icon}</i>
                <div>{level.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}