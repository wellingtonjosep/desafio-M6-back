import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import vehicleCaptureAllService from "../../services/vehicle/vehicleCaptureAll.service"


const vehicleCaptureAllController = async (req: Request, res: Response) => {
    try {
        const response = await vehicleCaptureAllService()

        return res.json(response)
    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default vehicleCaptureAllController