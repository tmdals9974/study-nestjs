import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const PORT: number = 8080;

// * express는 위에서 순차대로 읽어서 실행하기 때문에, 미들웨어들은 순서가 중요하다.
app.use((req: express.Request, res: express.Response, next) => {
  console.log("this is middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

// * 동일한 라우터가 존재해도, next를 사용한다면 두개가 순차적으로 작동 할 수 있음.
app.get("/cats/som", (req: express.Request, res: express.Response, next) => {
  console.log("this is som logging middleware");
  next();
});

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

// * 최종 응답값이 없을 때 실행됨. => 에러 처리 미들웨어
app.use((req: express.Request, res: express.Response, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
