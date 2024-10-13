import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../../../components/Header';
import NavBar from '../../../../components/NavBar';
import { useEffect, useState } from 'react';

export default function Detail({ darkMode, setDarkMode }) {
  const router = useRouter();
  const { university, feature, name } = router.query;
  const [detail, setDetail] = useState(null);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (feature && name) {
      fetch(`/api/detail/${feature}/${name}`)
        .then(res => res.json())
        .then(data => {
          if (feature === 'academics') {
            setClasses(Object.values(data));
          } else {
            setDetail(data);
          }
        });
    }
  }, [feature, name]);

  if (!detail && classes.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Harmonizr 360 - {name}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header title={name as string} backLink={`/feature/${encodeURIComponent(university as string)}/${feature}`} />

      <main className="content">
        {feature === 'academics' ? (
          <ul className="university-list">
            {classes.map(classItem => (
              <li key={classItem.name} className="university-item">
                <Link href={`/detail/${encodeURIComponent(university as string)}/${feature}/${encodeURIComponent(name as string)}/${encodeURIComponent(classItem.name)}`}>
                  <a>
                    <div className="university-info">
                      <div className="university-name">{classItem.name}</div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className={feature === 'start' || feature === 'helpdesks' ? 'helpdesk-detail' : 'class-description'}>
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
            {detail.prerequisites && <p><strong>Prerequisites:</strong> {detail.prerequisites}</p>}
          </div>
        )}
      </main>

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}