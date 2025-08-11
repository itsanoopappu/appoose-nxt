import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { CartProvider } from '@/contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <CartSidebar />
    </CartProvider>
  );
}