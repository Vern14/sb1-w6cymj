import Link from 'next/link';

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="nav-bar">
      <Link href="/">
        <a className="nav-item"><i className="material-icons">home</i></a>
      </Link>
      <button className="nav-item" onClick={() => setDarkMode(!darkMode)}>
        <i className="material-icons">{darkMode ? 'brightness_7' : 'brightness_4'}</i>
      </button>
      <a href="#" className="nav-item"><i className="material-icons">person</i></a>
    </nav>
  );
}