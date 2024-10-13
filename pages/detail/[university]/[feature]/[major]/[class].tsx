import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../../../../components/Header';
import NavBar from '../../../../../components/NavBar';
import { useEffect, useState } from 'react';

export default function ClassDetail({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { university, feature, major, class: className } = router.query;
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (feature && major && className) {
      fetch(`/api/detail/${feature}/${major}`)
        .then(res => res.json())
        .then(data => {
          setDetail(data[className as string]);
        });
    }
  }, [feature, major, className]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {className}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={className as string} backLink={`/detail/${encodeURIComponent(university as string)}/${feature}/${encodeURIComponent(major as string)}`} />

      <main className="content">
        <div className="class-description">
          <h3>{detail.name}</h3>
          <p>{detail.description}</p>
          <p><strong>Prerequisites:</strong> {detail.prerequisites}</p>
        </div>
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}