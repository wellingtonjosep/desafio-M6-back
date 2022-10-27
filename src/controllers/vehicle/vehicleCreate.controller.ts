import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import vehicleCreateService from "../../services/vehicle/vehicleCreate.service"


const vehicleCreateController = async (req: Request, res: Response) => {
    try {
        const {title, typeVehicle, description, year, mileage, price} = req.body

        const{ userId }= req.params
        
        const response = await vehicleCreateService({title, typeVehicle, description, year, mileage, price, id: userId})

        return res.status(201).json(response)
    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default vehicleCreateController