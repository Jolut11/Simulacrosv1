import { Container } from "./dependencyInjection/Container.js";

async function main(): Promise<void> {
    const appNavigator = Container.createAppNavigator();

    await appNavigator.start();
}

void main();