import StyledComponentsRegistry from '../lib/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
