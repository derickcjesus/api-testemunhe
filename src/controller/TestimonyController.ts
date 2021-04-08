import { Response, Request } from "express";

import db from "../database/connection";

export default class TestimonyController {
  async index(request: Request, response: Response) {
    const testimony = await db("users");

    return response.json(testimony);
  }

  async create(request: Request, response: Response) {
    const { name, age, testimony } = request.body;

    const trx = await db.transaction();

    try {
      await trx("users").insert({
        name,
        age,
        testimony,
      });

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      return response.status(400).json({
        error: "Unexpected error while creating new testimony",
      });
    }
  }
}
