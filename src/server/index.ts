import { bootstrap, BytiumResource } from "@bytium-core/server";
import { AppModule } from "@server/modules/app/app.module";

@BytiumResource({
  modules: [AppModule],
})
class Resource {}

bootstrap(Resource);
