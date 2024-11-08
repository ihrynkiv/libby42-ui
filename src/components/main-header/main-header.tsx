import Image from 'next/image';

import {
  Group,
  Button,
  Box,
} from '@mantine/core';
import Logo from '@public/favicon.png';
import Link from 'next/link';
import classes from './main-header.module.css';

export function MainHeader() {
  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/">
            <Image src={Logo.src} width={40} height={40} alt="Libby42 logo" />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}> Home </Link>
            <Link href="/" className={classes.link}> Learn </Link>
            <Link href="/" className={classes.link}> Academy </Link>
          </Group>

          <Group visibleFrom="sm">
            <Link href="/login?type=login"><Button variant="default">Log in</Button></Link>
            <Link href="/login?type=register"><Button>Sign up</Button></Link>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
