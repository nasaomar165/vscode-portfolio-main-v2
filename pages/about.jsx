import Link from 'next/link';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  const handleDownload = async () => {
    const url = 'https://utfs.io/f/R5EIkIsFyzDgJN1W1W9lhZrgInFsjvak13dxcKPMEqQ0bRCo';
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Omar_Hisham_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.greeting}>Hi there!👋 My name is</span>
      <h1 className={styles.name}>Omar Hisham.</h1>
      <h2 className={styles.tagline}>I build stuff for the web.</h2>
      <h3 className={styles.description}>
        I am a Computer Engineer focused on Web Development. Currently looking for a job 😀.
      </h3>
      <div className={styles.buttonContainer}>
        <button onClick={handleDownload} className={styles.button}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
