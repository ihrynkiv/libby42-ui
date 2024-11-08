import { Welcome } from '@components/welcome/welcome';
import { ColorSchemeToggle } from '@components/color-scheme-toggle/color-scheme-toggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
