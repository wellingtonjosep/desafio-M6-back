import { NextFunction, Request, Response } from "express";
import prisma from "../../database";

const verifyFieldAndUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  // verificar se o email ja existe

  const verifyEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (verifyEmail) {
    return res.status(400).json({
      name: "Email error",
      message: "Email already exists",
    });
  }

  // verificar tipos dos campos

  const errorType = [];

  if (typeof name != "string" || !name) {
    errorType.push({ name: "Required field" });
  }

  if (typeof email != "string" || !email) {
    errorType.push({ email: "Required field" });
  }

  if (typeof cpf != "string" || !cpf) {
    errorType.push({ cpf: "Required field" });
  }

  if (typeof phone != "string" || !phone) {
    errorType.push({ phone: "Required field" });
  }

  if (typeof birthDate != "string" || !birthDate) {
    errorType.push({ birthDate: "Required field" });
  }

  if (typeof description != "string" || !description) {
    errorType.push({ description: "Required field" });
  }

  if (typeof typeUser != "string" || !typeUser) {
    errorType.push({ typeUser: "Required field" });
  }

  if (typeof password != "string" || !password) {
    errorType.push({ password: "Required field" });
  }

  if (typeof cep != "string" || !cep) {
    errorType.push({ cep: "Required field" });
  }

  if (typeof state != "string" || !state) {
    errorType.push({ state: "Required field" });
  }

  if (typeof city != "string" || !city) {
    errorType.push({ city: "Required field" });
  }

  if (typeof road != "string" || !road) {
    errorType.push({ road: "Required field" });
  }

  if (typeof numberHouse != "number" || !numberHouse) {
    errorType.push({ numberHouse: "Required field" });
  }

  if (typeof complement != "string" || !complement) {
    errorType.push({ complement: "Required field" });
  }

  if (errorType.length > 0) {
    return res.status(400).json(errorType);
  }

  // verificando opções de tipos de usuario

  if (typeUser != "buyer" && typeUser != "advertiser") {
    return res.status(400).json({
      name: "typeUser error",
      message: `the ${typeUser} user type cannot be registered`,
    });
  }

  next();
};

export default verifyFieldAndUserMiddleware;
