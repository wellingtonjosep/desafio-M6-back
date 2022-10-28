import prisma from "../../database"


const vehicleCaptureAllService = async () => {
    const allVehicles = await prisma.vehicle.findMany({
        include: {
            images: true
        }
    })

    return allVehicles
}

export default vehicleCaptureAllService