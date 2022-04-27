import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'What does carbon footprint mean?',
    contents: (
      <div>
        Carbon footprint is the total amount of greenhouse gases emitted by something, whether a person, a company, an event or product, expressed as carbon dioxide or CO2 equivalent emissions (CO2e).<br></br>Every electronic device you own, including the mobile phone you’re probably reading this on, contributes to your carbon footprint. And thanks to some pretty detailed research by academics, we know roughly what that figure is. We also know ways to reduce it.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Why should I care?',
    contents: (
      <div>
        Let’s start with the scary stats about global emissions linked to smartphones. 

According to researchers from McMaster University in Canada, the carbon emissions linked to smartphone use have grown so much that they now dwarf the emissions contributed by PCs or laptops. The actual figures? They’ve gone from 17 megatons of CO2e per year to 125 megatons of CO2e per year. That’s an increase of 730%. 
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'But how much of those huge numbers are our individual mobile phones responsible for?',
    contents: (
      <div>
        Handily, Berners-Lee has done the calculations for us, taking into account the manufacturing process, the networks and data centres that smartphones connect to and the electricity they use. 
<br></br>
Use your mobile phone for an hour a day? 63kg CO2e a year
<br></br>
Use your mobile phone for 195 minutes a day (about average)? 69kg CO2e a year
<br></br>
Use your mobile phone 10 hours a day? 86kg CO2e a year


      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Where are most carbon emissions generated from?',
    contents: (
      <div>
        As much as it’s tempting to blame beliebers for the problem, the majority of carbon emissions linked to mobile phones are, however, generated during manufacturing, not in streaming pop videos. This is in large part because smartphones require precious metals and earths such as gold, tungsten and cobalt, that are specially mined – and mining is a carbon-intensive process. 

      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How can I help?',
    contents: (
      <div>
        Buy second hand or refurbished phones. Or if you can't do that then atleast make sure that your old phone if still usable is refurbished.
        <br></br>
        Although most of the carbon emissions don’t occur when the smartphone is in your hands, there are ways that you can make a difference to its overall footprint and therefore to the environment.
        <br></br>
When it comes to phone usage, the goal is to reduce energy consumption. There are some simple tweaks you can make to use less energy directly and depend less on data centres that consume large amounts of energy handling phone traffic. 
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
