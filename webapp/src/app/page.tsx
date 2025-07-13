
import 'bootstrap/dist/css/bootstrap.min.css';
import { CertificateRepository } from '@/app/components/CertificateRepository';
import { Header } from '@/app/components/Header';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <h1 className="my-4 text-center">מאגר האישורים</h1>
      <CertificateRepository />
    </div>
  );
}
