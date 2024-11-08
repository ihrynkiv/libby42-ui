import { Text, Title } from '@mantine/core';
import classes from './welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Libby42
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
          We are your personal library assistant. <br />
          We help you to organize your books, track your reading progress, and discover new books.
      </Text>
    </>
  );
}
