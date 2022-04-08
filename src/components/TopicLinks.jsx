import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import * as api from "../utils/api";
import CircularProgress from "@mui/material/CircularProgress";

export default function TopicLinks() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    }); /* Axios will automatically parse URL for parameter needed for GET request, now that links reflect topic requested by user */
  }, []);

  if (isLoading) return <CircularProgress />;
  return (
    <nav>
      <Button
        component={Link}
        sx={{
          fontFamily: "Quicksand",
          color: "black",
        }}
        key="all"
        variant={selectedTopic === "All" ? "outlined" : "text"}
        onClick={() => {
          setSelectedTopic("All");
        }}
        to="/"
      >
        {/* Alternative to heading link - clearer expression to user */}
        all
      </Button>
      {topics.map(({ slug: topic }, index) => {
        return (
          <Button
            component={Link}
            key={topic}
            sx={{
              fontFamily: "Quicksand",
              color: "black",
            }}
            variant={selectedTopic === topic ? "outlined" : "text"}
            onClick={() => {
              setSelectedTopic(topic);
            }}
            to={`/topics/${topic}`}
          >
            {topic}
          </Button>
        );
      })}
    </nav>
  );
}
