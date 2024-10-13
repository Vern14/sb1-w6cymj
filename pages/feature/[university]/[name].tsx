import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import NavBar from '../../../components/NavBar';
import { useEffect, useState } from 'react';

export default function Feature({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { university, name } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (name) {
      fetch(`/api/feature/${name}`)
        .then(res => res.json())
        .then(data => setData(data));
    }
  }, [name]);

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {name}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={name as string} backLink={`/university/${encodeURIComponent(university as string)}`} />

      <main className="content">
        <ul className="university-list">
          {data.map(item => (
            <li key={item.name} className="university-item">
              <Link href={`/detail/${encodeURIComponent(university as string)}/${name}/${encodeURIComponent(item.name)}`}>
                <a>
                  <div className="university-info">
                    <div className="university-name">{item.name}</div>
                    {item.description && <div className="location">{item.description}</div>}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}