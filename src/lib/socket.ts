import { io, Socket as SocketIo } from 'socket.io-client';
import { ManagerOptions } from 'socket.io-client/build/manager';
import { SocketOptions } from 'socket.io-client/build/socket';
import { socketPath, socketUrl } from '@/cfg';

/**
 * Socket模块
 * */
export class Socket {
  public io: SocketIo;
  /**
   * socket.io参数
   * 参考 ManagerOptions & SocketOptions
   * url https://socket.io/docs/v3/client-api/#new-Manager-url-options
   */
  public opts: Partial<ManagerOptions & SocketOptions> = {};

  constructor(opts?: Partial<ManagerOptions & SocketOptions>) {
    this.opts = opts || {
      path: socketPath,
      auth: {
        authorization: sessionStorage.getItem('Authorization') as string || '123'
      }
    };
  }

  /**
   * 打开通讯
   * @param callback
   */
  open(callback: Function) {
    this.io = io(socketUrl, this.opts);
    this.io.on('connect', () => {
      console.log('[Socket]connect');
    });
    this.io.on('disconnect', () => {
      console.log('[Socket]disconnect');
    });
    this.io.on('message', (data: { key: string; value: any; }) => callback(data));
    this.io.on('error', (data: any) => console.log(`[Socket]error ${data.toString()}`));
    this.io.on('close', () => console.log('[Socket]close'));
  }

  /**
   * 重新连接
   */
  reconnection() {
    if (this.io && this.io.io._readyState === 'closed') this.io.open();
  }

  /**
   * 关闭
   */
  close() {
    if (this.io && this.io.io._readyState !== 'closed') this.io.close();
  }

  /**
   * 发送
   */
  send(args: any) {
    if (this.io && this.io.io._readyState !== 'closed') this.io.send(args);
  }

}