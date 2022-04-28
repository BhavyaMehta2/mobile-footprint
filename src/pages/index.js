import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Table from "components/table";
import model from "components/model.json";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import Blogs from "sections/blogs";
import FAQ from "sections/faq";
import Subscribe from "sections/subscribe";
import Banner from "sections/banner";
/*
export async function getStaticProps() {
  const cRes = await fetch("http://localhost:3000/model.json");
  const models = await cRes.json();
  return {
    props: {
      model: models,
    },
  };
}
*/

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Mobile Footprint" />
          <Banner/>
          <Services />
          <br></br>
          <br></br>
          <Table data={model} rowsPerPage={8}/>
          <br></br>
          <br></br>
          <Testimonials />
          <Blogs />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
