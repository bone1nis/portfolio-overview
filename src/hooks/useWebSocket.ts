import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrice } from "../features/portfolioSlice";

type TickerData = {
  s: string; // Символ валютной пары
  P: string; // Процентное изменение за 24 часа
  c: string; // Текущая цена
}

const useWebSocket = () => {
  const dispatch = useDispatch();
  const wsUrl = "wss://stream.binance.com:9443/stream?streams=!ticker@arr";

  useEffect(() => {
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log("WebSocket соединение установлено");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.data) {
        data.data.forEach((item: TickerData) => {
          const { s: name, c: price, P: percentChange24h } = item;
          dispatch(updatePrice({ name, price, percentChange24h }));
        });
      }
    };

    socket.onerror = (e) => console.error(e);

    socket.onclose = () => console.log("WebSocket соединение закрыто");

    return () => socket.close();
  }, [dispatch]);

  return null;
};

export default useWebSocket;
