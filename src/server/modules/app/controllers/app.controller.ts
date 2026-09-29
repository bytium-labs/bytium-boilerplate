import { Args, Command, Controller, Logger, Source } from "@bytium-core/server";
import { GreetingService } from "@server/modules/app/services/greeting.service";

@Controller()
export class AppController {
  readonly #logger = new Logger(AppController.name);

  constructor(private readonly greeting: GreetingService) {}

  @Command("hello")
  hello(@Source() source: number, @Args() args: string[]): void {
    const name = args[0] ?? "world";

    this.#logger.log(`${this.greeting.greet(name)} (requested by ${source})`);
  }
}
