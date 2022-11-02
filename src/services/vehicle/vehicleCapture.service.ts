import prisma from "../../database"
import { AppError } from "../../errors/appError"


const vehicleCaptureService = async (vehicleId: string) => {

    const vehicle = await prisma.vehicle.findUnique({
        where: {
            id: vehicleId
        }
    })

    if (!vehicle) {
        throw new AppError(404, "Vehicle not found")
    }

    return vehicle
}

export default vehicleCaptureService