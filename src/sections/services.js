import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage2,
    text:
      'For every new phone you buy, a perfectly usable phone ends up in a landfill.',
    heading: 'Break The Chain',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'GHG\'s emitted from manufacturing a single unit of a smartphone is very high.',
    heading: 'Carbon Footprint',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Always Remember, Reuse>Reduce>Recycle',
    heading: 'The 3 R\'s',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Why Buy Secondhand?"
          text="Here's Why"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
