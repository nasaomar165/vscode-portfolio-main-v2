import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Omar Hisham is a full stack web developer building websites and applications"
      />
      <meta
        name="keywords"
        content="Omar Hisham, Omar, Hisham, web developer portfolio, nitin web developer, nitin developer, Omar Hisham portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Omar Hisham's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://utfs.io/f/R5EIkIsFyzDglmXq6hbXdmTxG2WyrkNwtDsARKLgoq30IOvE" />
      <meta property="og:url" content="omar-hisham.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Omar Hisham',
};
