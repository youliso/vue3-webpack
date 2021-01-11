import {io, Socket} from "socket.io-client";
import {ManagerOptions} from "socket.io-client/build/manager";
import {SocketOptions} from "socket.io-client/build/socket";

const config = require("@/cfg/config.json");

/**
 * Socket模块
 * */
export class Sockets {
    public io: Socket;

    constructor() {
    }

    /**
     * socket.io参数
     * 参考 ManagerOptions & SocketOptions
     * url https://socket.io/docs/v3/client-api/#new-Manager-url-options
     */
    opts() {
        let opts: Partial<ManagerOptions & SocketOptions> = {
            auth: {
                authorization: sessionStorage.getItem("Authorization") as string || ""
            }
        }
        return opts;
    }

    /**
     * 打开通讯
     * @param callback
     */
    open(callback: Function) {
        this.io = io(config.socketUrl, this.opts());
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