import { io, Socket as IoSocket } from "socket.io-client";

class Socket {
  private socket: IoSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  connect() {
    if (!this.socket) {
      this.socket = io(this.url, { transports: ["websocket"] });

      this.socket.on("connect", () => console.log("WebSocket connected"));
      this.socket.on("disconnect", () => console.log("WebSocket disconnected"));
      this.socket.on("error", (error) => console.error("WebSocket error:", error));
    }
  }

  on(event: string, callback: (data: any) => void) {
    this.socket?.on(event, callback);
  }

  off(event: string) {
    this.socket?.off(event);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default Socket;