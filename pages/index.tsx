import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Home({ darkMode, setDarkMode }) {
  const sectors = [
    { name: 'Education', icon: 'school' },
    { name: 'Health', icon: 'local_hospital' },
    { name: 'Shopping', icon: 'shopping_cart' }
  ];

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - Sector Navigation</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title="Harmonizr 360" />

      <main className="content">
        <div className="sector-grid">
          {sectors.map((sector) => (
            <Link href={`/sector/${sector.name.toLowerCase()}`} key={sector.name}>
              <a className={`sector-item ${sector.name.toLowerCase()}`}>
                <i className="material-icons">{sector.icon}</i>
                <div>{sector.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}