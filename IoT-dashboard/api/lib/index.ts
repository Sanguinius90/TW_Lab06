import App from './app';
import IndexController from "./controllers/index.controller";
import ItemController from './controllers/item.controller';
const app: App = new App([
   new IndexController(),
   new ItemController()
]);

app.listen();