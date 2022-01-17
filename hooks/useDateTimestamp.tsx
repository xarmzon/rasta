import { useState, useEffect } from "react";

const useDateTimestamp = () => {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return {
    timestamp,
  };
};

export default useDateTimestamp;
