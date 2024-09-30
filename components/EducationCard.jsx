import Image from 'next/image';
import styles from '../styles/EducationCard.module.css';

const EducationCard = ({ education }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={education.image}
          alt={`${education.institution} logo`}
          width={100}
          height={100}
          className={styles.universityImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.institutionContainer}>
          <h3 className={styles.institution}>{education.institution}</h3>
          <span className={styles.location}>{education.location}</span>
        </div>
        <p className={styles.degree}>{education.degree}</p>
        <p className={styles.year}>{education.year}</p>
        {education.achievements && (
          <div className={styles.achievements}>
            <h4>Achievements:</h4>
            <ul>
              {education.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
