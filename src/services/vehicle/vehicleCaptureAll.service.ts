import prisma from "../../database"


const vehicleCaptureAllService = async () => {
    const allVehicles = await prisma.vehicle.findMany()

    return allVehicles
}

export default vehicleCaptureAllService