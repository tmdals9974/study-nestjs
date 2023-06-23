import { Request, Response } from "express";
import { Cat, CatType } from "app.model";

// * READ 고양이 전체 데이터 다 조회
export const readAllcat = (req: Request, res: Response) => {
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
};

// * READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
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
};

// * CREATE 새로운 고양이 추가
export const createCat = (req: Request, res: Response) => {
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
};

// * UPDATE 고양이 데이터 업데이트
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
};

// * UPDATE 고양이 데이터 부분적으로 업데이트
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
};

// * DELETE 고양이 데이터 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
};
