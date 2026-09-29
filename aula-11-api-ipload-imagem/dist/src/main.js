"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_js_1 = require("./app.module.js");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_js_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uplouds'), {});
    await app.listen(3000);
    console.log('Aplicação rodando em http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map