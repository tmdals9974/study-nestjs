import { Cat, CatType } from "app.model";
import { Router } from 'express';

const router = Router();

// * READ 고양이 전체 데이터 다 조회
router.get("/cats", (req, res) => {
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
router.get("/cats/:id ", (req, res) => {
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
router.post("/cats ", (req, res) => {
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

export default router;