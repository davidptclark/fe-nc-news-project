import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../api';

export default function TopicLinks() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api
      .getTopics()
      .then(({ topics }) =>
        setTopics(topics)
      ); /* Axios will automatically parse URL for parameter needed for GET request, now that links reflect topic requested by user */
  }, []);
  //TODO: Style Links
  return (
    <nav>
      {topics.map(({ slug: topic }, index) => {
        return (
          <Link key={index} className="topic-links" to={`/${topic}`}>
            {topic}
          </Link>
        );
      })}
    </nav>
  );
}
