import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const PORT: number = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
