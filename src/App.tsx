import '@mantine/core/styles.css';
import { Stack, MantineProvider } from '@mantine/core';
import ContactInfo from './components/ContactInfo';
export default function App() {

  return (<MantineProvider>
    <Stack
      h={'100 %'}
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="lg"
    >
      <ContactInfo />
    </Stack>
  </MantineProvider>);

}