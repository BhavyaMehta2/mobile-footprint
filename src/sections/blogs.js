import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'E-Waste, Tech\'s biggest and dirtiest secret',
    description:
      'Few of us give a thought to the immense amount of resources needed to bring a gadget to life. Smartphone production requires many different rare earth metals, and mining them dramatically contributes to the device’s carbon footprint.',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: null,
    title:
      'Apple stops shipping chargers in box with their smartphones',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: 'Logitech Reimagines A Climate Positive World',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: 'Do You Think Microbes Are The Future of Recycling? Here Are All Your Answers',
    description:
      '“At the end, you have exactly the same quantity of plastic waste.”',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: blogImage4,
    title:
      'Apple only company to publicly release data on CO2 emissions',
    description: null,
    path: '/',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="News Insights"
          text="Catchup to the latest news"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
