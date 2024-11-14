import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import ContactInfo from './components/ContactInfo';
export default function App() {

  return (<MantineProvider>
    <ContactInfo />
  </MantineProvider>);

}