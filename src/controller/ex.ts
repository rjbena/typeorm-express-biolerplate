import { Request, Response, Router } from "express";

import Example from "./../entities/Example";

export const create = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const ex = new Example(name);
    await ex.save();
    return res.json(ex);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getAllEx = async (req: Request, res: Response) => {
  try {
    const examples = await Example.find();
    if (examples.length <= 0)
      return res.status(400).json({ error: "No examples found" });

    return res.json(examples);
  } catch (error) {}
};

export const read = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const ex = await Example.findOneOrFail(name);
    return res.json(ex);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const ex = await Example.findOneOrFail(id);
    return res.json(ex);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const update = async (req: Request, res: Response) => {};

export const deleteEx = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
