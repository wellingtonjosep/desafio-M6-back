import prisma from "../../database"
import { AppError } from "../../errors/appError"


const userCaptureService = async (userId: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    return {...user, password: undefined}
}

export default userCaptureService