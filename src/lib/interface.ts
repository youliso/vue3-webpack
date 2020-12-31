export interface SocketMsg {
    key: SOCKET_MSG_TYPE;
    value?: unknown;
}

export enum IPC_MSG_TYPE {
    WIN,
    SOCKET
}

export enum SOCKET_MSG_TYPE {
    ERROR,
    SUCCESS,
    INIT,
    CLOSE
}
