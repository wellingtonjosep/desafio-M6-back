import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      cpf,
      phone,
      birthDate,
      description,
      typeUser,
      password,
      cep,
      state,
      city,
      road,
      numberHouse,
      complement,
    } = req.body;

    const response = await userCreateService({
      name,
      email,
      cpf,
      phone,
      birthDate,
      description,
      typeUser,
      password,
      cep,
      state,
      city,
      road,
      numberHouse,
      complement,
    });
    return res.status(201).json(response)
  } catch (err) {
    if (err instanceof Error) {
      handleError(err, res);
    }
  }
}

export default userCreateController
