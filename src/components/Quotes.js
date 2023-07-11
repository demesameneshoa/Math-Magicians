import { useState, useEffect } from 'react';
import styles from './Quote.module.css';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': 'jHzSXaz6+BR4RWSHKy7bQw==E4YD3ZZ8bPRDL0fU',
          },
        });
        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.quotediv}>
      <q className={styles.quote}>{data.quote}</q>
      <p className={styles.p}>{data.author}</p>
    </div>
  );
}

export default Quote;
