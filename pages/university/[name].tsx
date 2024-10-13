import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

export default function University({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { name } = router.query;

  const features = [
    { name: 'Start', icon: 'play_arrow' },
    { name: 'Updates', icon: 'notifications' },
    { name: 'Path', icon: 'timeline' },
    { name: 'People', icon: 'people' },
    { name: 'Lodging', icon: 'hotel' },
    { name: 'Shop or Eat', icon: 'restaurant' },
    { name: 'Transport', icon: 'directions_bus' },
    { name: 'Core', icon: 'spa' },
    { name: 'Academics', icon: 'school' },
    { name: 'Programs', icon: 'list_alt' },
    { name: 'Athletics & Groups', icon: 'sports_soccer' },
    { name: 'Media', icon: 'perm_media' },
    { name: 'Startups', icon: 'rocket_launch' },
    { name: 'Projects & Publications', icon: 'book' },
    { name: 'Buildings & Spaces', icon: 'apartment' },
    { name: 'Calendar', icon: 'event' },
    { name: 'Statistics', icon: 'bar_chart' },
    { name: 'Map', icon: 'map' },
    { name: 'Virtual Tour', icon: 'view_in_ar' },
    { name: 'Wellness', icon: 'self_improvement' },
    { name: 'Feedback', icon: 'feedback' },
    { name: 'Historical Timeline', icon: 'history' }
  ];

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {name}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={name as string} backLink="/level/tertiary">
        <div className="header-icons">
          <i className="material-icons">wifi</i>
          <i className="material-icons">how_to_reg</i>
          <i className="material-icons">volunteer_activism</i>
        </div>
      </Header>

      <main className="content">
        <div className="sector-grid">
          {features.map(feature => (
            <Link href={`/feature/${encodeURIComponent(name as string)}/${feature.name.toLowerCase()}`} key={feature.name}>
              <a className="sector-item">
                <i className="material-icons">{feature.icon}</i>
                <div>{feature.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}