import prisma from "../../database"
import { AppError } from "../../errors/appError"


const userDeleteService = async (userId: string) => {

    const user = await prisma.user.delete({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    return true
}

export default userDeleteService