import prisma from "../../database";
import { IUserUpdate } from "../../interfaces/user";
import bcrypt from "bcryptjs";
import { AppError } from "../../errors/appError";

const userUpdateService = async ({
  id,
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
}: IUserUpdate) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      adresses: true,
    },
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const newUser = {
    name: name || user.name,
    email: email || user.email,
    cpf: cpf || user.cpf,
    phone: phone || user.phone,
    password: password || user.password,
    birthDate: birthDate || user.birthDate,
    description: description || user.description,
    typeUser: typeUser || user.typeUser,
    cep: cep || user.adresses[0].cep,
    state: state || user.adresses[0].state,
    city: city || user.adresses[0].city,
    road: road || user.adresses[0].road,
    numberHouse: numberHouse || user.adresses[0].numberHouse,
    complement: complement || user.adresses[0].complement,
  };

  password && (newUser.password = bcrypt.hashSync(password, 10));

  // verificando se o email atualizado não existe no banco de dados
  if (email) {
    const verifyEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (verifyEmail) {
      throw new AppError(400, "Email already exists");
    }
  }

  if (newUser.typeUser != "buyer" && newUser.typeUser != "advertiser") {
    throw new AppError(
      400,
      `the ${newUser.typeUser} user type cannot be registered`
    );
  }

  const userCreate = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: newUser.name,
      email: newUser.email,
      cpf: newUser.cpf,
      phone: newUser.phone,
      birthDate: newUser.birthDate,
      description: newUser.description,
      typeUser: newUser.typeUser,
      password: newUser.password,
    },
  });

  const adresse = await prisma.adresse.update({
    where: {
      id: user.adresses[0].id,
    },
    data: {
      cep: newUser.cep,
      state: newUser.state,
      city: newUser.city,
      road: newUser.road,
      numberHouse: newUser.numberHouse,
      complement: newUser.complement,
      userId: userCreate.id,
    },
  });

  return { ...userCreate, password: undefined, adresse: adresse };
};

export default userUpdateService;
