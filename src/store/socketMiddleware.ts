import { Middleware } from "@reduxjs/toolkit";
import { updateAssets } from "../features/portfolioSlice";
import { Asset } from "../types";

const wsUrl = "wss://stream.binance.com:9443/stream?streams=!ticker@arr";
const socket = new WebSocket(wsUrl);

const socketMiddleware: Middleware = (store) => {
  return (next) => (action: any) => {
    switch (action.type) {
      case "socket/connect":
        socket.onopen = () => {
          console.log("WebSocket connected!");
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data?.data) {
            const updatedData = data.data.reduce((acc: Asset[], item: any) => {
              if (item.s.endsWith("USDT")) {
                acc.push({
                  name: item.s.slice(0, -4),
                  price: item.c,
                  percentChange24h: item.P,
                });
              }
              return acc;
            }, []);

            updatedData.forEach((asset: Asset) => {
              store.dispatch(updateAssets(asset));
            });
          }
        };

        socket.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        socket.onclose = () => {
          console.log("WebSocket connection closed.");
        };

        break;

      case "socket/disconnect":
        socket.close();
        break;

      default:
        break;
    }

    return next(action);
  };
};

export default socketMiddleware;
