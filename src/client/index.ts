import { bootstrap, BytiumResource } from "@bytium-core/client";
import { AppModule } from "@client/modules/app/app.module";

@BytiumResource({
  modules: [AppModule],
})
class Resource {}

bootstrap(Resource);
