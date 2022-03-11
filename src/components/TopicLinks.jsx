import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../utils/api';

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
      <Link key="all" className="topic-links" to="/">
        {/* Alternative to heading link - clearer expression to user */}
        all
      </Link>
      {topics.map(({ slug: topic }, index) => {
        return (
          <Link key={topic} className="topic-links" to={`/topics/${topic}`}>
            {topic}
          </Link>
        );
      })}
    </nav>
  );
}
