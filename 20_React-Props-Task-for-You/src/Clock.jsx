import { useEffect, useState } from "react";

function Clock({colorr}) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1
        style={{
          color: colorr,
          backgroundColor: "black",
          width: "200px",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        {time}
      </h1>
    </>
  );
}
export default Clock;
