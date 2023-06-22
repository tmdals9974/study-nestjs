import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const PORT: number = 8080;

/**
 * * logging middleware
 * ? express는 위에서 순차대로 읽어서 실행하기 때문에, 미들웨어들은 순서가 중요하다.
 */
app.use((req: express.Request, res: express.Response, next) => {
  console.log("this is middleware");
  next();
});

/**
 * * json middleware
 * ? express는 body parsing을 기본으로 지원하지 않아서 사용하는 미들웨어.
 */
app.use(express.json());

// * READ 고양이 전체 데이터 다 조회
app.get("/cats", (req, res) => {
  const cats = Cat;
  try {
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
});

// * READ 특정 고양이 데이터 조회
app.get("/cats/:id ", (req, res) => {
  const params = req.params;

  const cat = Cat.find((cat) => {
    return cat.id === params["id "];
  });
  try {
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
});

// * CREATE 새로운 고양이 추가
app.post("/cats ", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);

    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
});

/**
 * * 404 middleware
 * ? 최종 응답값이 없을 때 실행됨. => 에러 처리 미들웨어
 */
app.use((req: express.Request, res: express.Response, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
