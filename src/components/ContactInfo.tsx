import { Title, Grid, Text, Container, Group, Button } from '@mantine/core';
import { Timeline } from '@mantine/core';
import { TimelineDescription } from './description';
import { useState } from 'react';
const ContactInfo = () => {
  const [active, setActive] = useState(0);
  return (
    <Container fluid>

      <Title order={1}>Joaquín Concha Navarro</Title>
      <Container pb={10}>

        <Group justify="space-between" grow>
          <Title order={6}>Software Engineer</Title>
          <Title order={6}>Full Stack Developer</Title>
        </Group>
      </Container>
      <Container pb={10}>

        <Group justify="space-between" grow>
          <Title order={6}>jconchn@uc.cl</Title>
          <Title order={6}>LinkedIn</Title>
          <Title order={6}>Github</Title>
        </Group>
      </Container>


      <Grid grow justify="space-between" align="center">
        <Grid.Col span={6}>
          <Timeline active={active - 1}>
            <Timeline.Item title="Ingeniero Civil Industrial" >
              <Group>
                <Text fw={200}>Pontificia Universidad Católica de Chile</Text>
                <Button variant="transparent" onClick={() => setActive(1)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Ingeniero en Software Trainee">
              <Group>
                <Text fw={200}>PlagLabs</Text>
                <Button variant="transparent" onClick={() => setActive(2)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Ayudante - Diseño Detallado de Software." >
              <Group>
                <Text fw={200}>Universidad Católica de Chile</Text>
                <Button variant="transparent" onClick={() => setActive(3)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Licenciatura en Ciencias de la Ingenería." >
              <Group>
                <Text fw={200}>Universidad Católica de Chile</Text>
                <Button variant="transparent" onClick={() => setActive(4)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Ayudante - Sistemas de Información." >
              <Group>
                <Text fw={200}>Universidad Católica de Chile</Text>
                <Button variant="transparent" onClick={() => setActive(5)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Ingreso a Ingenería UC." >
              <Group>
                <Text fw={200}>Universidad Católica de Chile</Text>
                <Button variant="transparent" onClick={() => setActive(6)}>Ver más</Button>
              </Group>
            </Timeline.Item>
            <Timeline.Item title="Enseñanza media." >
              <Group>
                <Text fw={200}>Instituto del Puerto de San Antonio</Text>
                <Button variant="transparent" onClick={() => setActive(7)}>Ver más</Button>
              </Group>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>{TimelineDescription[active]}</Text>
        </Grid.Col>

      </Grid>

    </Container>
  );
};

export default ContactInfo;