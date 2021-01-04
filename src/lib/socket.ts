import {io, Socket} from "socket.io-client";
import {socketUrl} from "@/config";

/**
 * Socket模块
 * */
class Sockets {
    private static instance: Sockets;
    public io: Socket;

    static getInstance() {
        if (!Sockets.instance) Sockets.instance = new Sockets();
        return Sockets.instance;
    }

    constructor() {
    }

    /**
     * 打开通讯
     * @param callback
     */
    open(callback: Function) {
        this.io = io(socketUrl, {query: `Authorization=${sessionStorage.getItem("Authorization")}`});
        this.io.on("connect", () => {
            console.log("[Socket]connect");
        });
        this.io.on("disconnect", () => {
            console.log("[Socket]disconnect");
            setTimeout(() => {
                if (this.io && this.io.io._readyState === "closed") this.io.open()
            }, 1000 * 60 * 3)
        });
        this.io.on("message", (data: any) => callback(data));
        this.io.on("error", (data: any) => console.log(`[Socket]error ${data.toString()}`));
        this.io.on("close", () => console.log("[Socket]close"));
    }

    /**
     * 重新连接
     */
    reconnection() {
        if (this.io && this.io.io._readyState === "closed") this.io.open();
    }

    /**
     * 关闭
     */
    close() {
        if (this.io && this.io.io._readyState !== "closed") this.io.close();
    }
}

export const SocketIo = Sockets.getInstance();