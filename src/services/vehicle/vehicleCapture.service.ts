import prisma from "../../database"
import { AppError } from "../../errors/appError"


const vehicleCaptureService = async (userId: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    const vehicles = await prisma.vehicle.findMany({
        where: {
            user: user
        }
    })

    return vehicles
}

export default vehicleCaptureService