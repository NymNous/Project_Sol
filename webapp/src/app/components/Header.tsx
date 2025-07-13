
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">האפליקציה של סול</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link href="#" className="nav-link">הפרופיל שלי</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link">הגדרות</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link active" aria-current="page">מאגר האישורים</Link></li>
      </ul>
    </header>
  );
};
