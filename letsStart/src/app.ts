import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;
  public readonly port = 8080;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    /**
     * * 분리해둔 Cats Router를 추가
     */
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    /**
     * * logging middleware
     * ? express는 위에서 순차대로 읽어서 실행하기 때문에, 미들웨어들은 순서가 중요하다.
     */
    this.app.use((req: express.Request, res: express.Response, next) => {
      console.log("this is middleware");
      next();
    });

    /**
     * * json middleware
     * ? express는 body parsing을 기본으로 지원하지 않아서 사용하는 미들웨어.
     */
    this.app.use(express.json());

    this.setRoute();

    /**
     * * 404 middleware
     * ? 최종 응답값이 없을 때 실행됨. => 에러 처리 미들웨어
     */
    this.app.use((req: express.Request, res: express.Response, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`app listening at http://localhost:${this.port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
