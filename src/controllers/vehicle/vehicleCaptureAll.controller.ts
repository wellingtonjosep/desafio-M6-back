import { Request, Response } from "express"
import { handleError } from "../../errors/appError"


const vehicleCaptureAllController = (req: Request, res: Response) => {
    try {

    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default vehicleCaptureAllController