import prisma from "../../database";
import { IUser } from "../../interfaces/user";
import bcrypt from "bcryptjs"


export default async function userCreateService({name, email, cpf, phone, birthDate, description, typeUser, password, cep, state, city, road, numberHouse, complement }: IUser) {
    const userCreate = await prisma.user.create({
        data: {
            name,
            email,
            cpf,
            phone,
            birthDate,
            description,
            typeUser,
            password: bcrypt.hashSync(password, 10)

        }
    })

    const adresse = await prisma.adresse.create({
        data: {
            cep,
            state,
            city,
            road,
            numberHouse,
            complement,
            userId: userCreate.id
        }
    })

    return {...userCreate, password: undefined, adresse: adresse}
}