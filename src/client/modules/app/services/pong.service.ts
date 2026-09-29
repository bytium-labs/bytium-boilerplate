import { Injectable, Logger } from "@bytium-core/client";

@Injectable()
export class PongService {
  readonly #logger = new Logger(PongService.name);

  pong(): void {
    this.#logger.log("pong");
  }
}
