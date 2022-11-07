import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
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

    const { userId } = req;

    const response = await userUpdateService({
      id: userId,
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

export default userUpdateController