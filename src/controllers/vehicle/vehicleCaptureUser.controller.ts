import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import vehicleCaptureUserService from "../../services/vehicle/vehicleCaptureUser.service"


const vehicleCaptureUserController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        const response = await vehicleCaptureUserService(userId)

        return res.json(response)
    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default vehicleCaptureUserController