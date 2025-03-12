import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      console.log(parsedData);
      setData(parsedData);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return data;
};

export default useWebSocket;
