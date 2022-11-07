import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import userCaptureService from "../../services/user/userCapture.service"


const userDeleteController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const response = await userCaptureService(userId)

        return res.status(204)
    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default userDeleteController

