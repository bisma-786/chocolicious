import './globals.css';

export const metadata = {
  title: 'Frisky - Premium Chocolate Craftsmanship',
  description: 'Premium chocolate craftsmanship experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}