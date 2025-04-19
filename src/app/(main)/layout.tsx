import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
