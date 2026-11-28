import { Container } from "./dependencyInjection/Container.js";
async function main() {
    const appNavigator = Container.createAppNavigator();
    await appNavigator.start();
}
void main();
//# sourceMappingURL=main.js.map