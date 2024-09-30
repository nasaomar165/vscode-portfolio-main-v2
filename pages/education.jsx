import EducationCard from '../components/EducationCard';
import styles from '../styles/EducationPage.module.css';

const EducationPage = ({ educationList }) => {
  return (
    <>
      <h3>My Education</h3>
      <div className={styles.container}>
        {educationList.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Replace this with your actual education data
  const educationList = [
    {
      id: 1,
      institution: 'Pharos University',
      location: 'Alexandria, Egypt', // Added location
      degree: 'Bachelor of Computer Engineering',
      year: '2015 - 2020',
      image: 'https://utfs.io/f/R5EIkIsFyzDg5k2o5A7BExAJMGoQYlyFpcU14DmItiqeubNz',
    },
    // Add more education entries as needed
  ];

  return {
    props: { title: 'Education', educationList },
  };
}

export default EducationPage;
