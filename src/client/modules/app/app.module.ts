import { BytiumResourceModule } from "@bytium-core/client";
import { AppController } from "@client/modules/app/controllers/app.controller";
import { PongService } from "@client/modules/app/services/pong.service";

@BytiumResourceModule({
  name: "app",
  controllers: [AppController],
  providers: [PongService],
})
export class AppModule {}
