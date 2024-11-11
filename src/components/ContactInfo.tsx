import { Title, Grid, Text, Container } from '@mantine/core';
import { Timeline } from '@mantine/core';
const ContactInfo = () => {
  return (
    <Container>
      <Grid grow justify="space-between" align="center">
        <Grid.Col span={6}>
          <Title order={1}>Joaquín Concha Navarro</Title>
          <Title order={6}>Software Engineer  |  Full Stack Developer</Title>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={1}>Contactame!</Title>
          <Title order={6}>+56 9 3414 0379</Title>
          <Title order={6}>jconchn@uc.cl</Title>
        </Grid.Col>
      </Grid>

      <Grid grow justify="space-between" align="center">
        <Grid.Col span={6}>
          <Title order={6}>Experiencia</Title>
        </Grid.Col>
        <Grid.Col span={6}>
          <Timeline active={1}>
            <Timeline.Item title="Ingeniería Civil Industrial. " >
              <Text>Diploma Ingeniería en Computación.</Text>
              <Text>Universidad Católica de Chile</Text>

            </Timeline.Item>
            <Timeline.Item title="Ingeniero en Software Trainee" >
              <Text>Plaglabs</Text>
            </Timeline.Item>
            <Timeline.Item title="Ayudante - Diseño Detallado de Software." >
              <Text>Universidad Católica de Chile</Text>
            </Timeline.Item>
            <Timeline.Item title="Licenciatura en Ciencia de la Ingenería. " >
              <Text>Diploma en Ingenería de Software.</Text>
              <Text>Universidad Católica de Chile</Text>
            </Timeline.Item>
            <Timeline.Item title="Ayudante - Sistemas de Información." >
              <Text>Universidad Católica de Chile</Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      </Grid>

    </Container>
  );
};

export default ContactInfo;