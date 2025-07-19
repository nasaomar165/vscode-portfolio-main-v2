import Image from 'next/image';
import styles from '../styles/EducationCard.module.css';
import { useState, useEffect } from 'react';
export async function fetchCredlyBadges(userId) {
  try {
    const proxyResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.credly.com/users/${userId}/badges.json`)}`);
    if (!proxyResponse.ok) {
      throw new Error(`HTTP error! status: ${proxyResponse.status}`);
    }
    const proxyData = await proxyResponse.json();
    const parsedData = JSON.parse(proxyData.contents);
    return Array.isArray(parsedData) ? parsedData : [parsedData];
  } catch (error) {
    console.error('Error fetching Credly badges:', error);
    return [];
  }
}

const CertificationCard = ({ username }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCredlyBadges(username);
        setBadges(data[0].data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (!badges || badges.length === 0) return <div>No certifications found</div>;
  return (
    Array.isArray(badges) && badges.map((data) => (
      <div className={styles.container} key={data.id}>
        <div className={styles.imageContainer}>
          <Image
            src={data.badge_template.image_url}
            alt={`${data.badge_template.name} logo`}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.institutionContainer}>
            <h3 className={styles.institution}>{data.badge_template.name}</h3>
            <a className={styles.location} href={`https://www.credly.com/badges/${data.id}`} target="_blank" rel="noopener noreferrer nofollow">
              credentials
            </a>
          </div>
          <p className={styles.degree}>{data.issuer.entities[0].entity.name}</p>
          <p className={styles.year}>{new Date(data.issued_at_date).toLocaleDateString()}</p>
          {data.badge_template.skills && (
            <div className={styles.skills}>
              <h4>Skills:</h4>
              <ul>
                {data.badge_template.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
          )}
            <hr className={styles.divider} />
        </div>
      
      </div>
   
    ))
  );
};

export default CertificationCard;
