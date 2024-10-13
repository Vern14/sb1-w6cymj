import Link from 'next/link';

export default function Header({ title, backLink, children }) {
  return (
    <header className="header">
      {backLink && (
        <Link href={backLink}>
          <a className="back-button">
            <i className="material-icons">arrow_back</i>
          </a>
        </Link>
      )}
      <h1 className="header-title">{title}</h1>
      {children}
    </header>
  );
}