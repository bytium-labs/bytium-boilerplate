import { Command, Controller } from "@bytium-core/client";
import { PongService } from "@client/modules/app/services/pong.service";

@Controller()
export class AppController {
  constructor(private readonly pongService: PongService) {}

  @Command("ping")
  ping(): void {
    this.pongService.pong();
  }
}
