import { Injectable } from "@bytium-core/server";

@Injectable()
export class GreetingService {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
