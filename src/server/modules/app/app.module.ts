import { BytiumResourceModule } from "@bytium-core/server";
import { AppController } from "@server/modules/app/controllers/app.controller";
import { GreetingService } from "@server/modules/app/services/greeting.service";

@BytiumResourceModule({
  name: "app",
  controllers: [AppController],
  providers: [GreetingService],
})
export class AppModule {}
