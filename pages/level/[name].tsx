import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';

export default function Level({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { name } = router.query;
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch('/api/universities')
      .then(res => res.json())
      .then(data => setUniversities(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {name}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={name as string} backLink="/sector/education" />

      <main className="content">
        <ul className="university-list">
          {universities.map(uni => (
            <li key={uni.name} className="university-item">
              <Link href={`/university/${encodeURIComponent(uni.name)}`}>
                <a>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={uni.image} alt={`${uni.name} logo`} className="university-logo" />
                    <div className="university-info">
                      <div className="university-name">{uni.name}</div>
                      <div className="location">{uni.location}</div>
                    </div>
                  </div>
                  <i className="material-icons heart-icon">favorite_border</i>
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