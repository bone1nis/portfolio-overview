import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAssets } from "../features/portfolioSlice";
import { Asset } from "../types";

type TickerData = {
  s: string;
  P: string;
  c: string;
};

const useWebSocket = () => {
  const dispatch = useDispatch();
  const wsUrl = "wss://stream.binance.com:9443/stream?streams=!ticker@arr";
  const latestData = useRef<Asset[]>([]);

  useEffect(() => {
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log("WebSocket соединение установлено");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.data) {
        const updatedData = data.data.map((item: TickerData) => {
          const { s: name, c: price, P: percentChange24h } = item;
          return { name, price, percentChange24h };
        });

        latestData.current = updatedData;
      }
    };

    socket.onerror = (e) => console.error(e);

    socket.onclose = () => console.log("WebSocket соединение закрыто");

    const intervalId = setInterval(() => {
      if (latestData.current.length > 0) {
        latestData.current.forEach((item) => {
          dispatch(updateAssets(item));
        });
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
      socket.close();
    };
  }, [dispatch]);

  return null;
};

export default useWebSocket;