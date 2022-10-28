import { NextFunction, Request, Response } from "express";
import prisma from "../../database";

const verifyFieldAndVehicleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, typeVehicle, images, description, year, mileage, price } =
    req.body;

  const { userId } = req.params;

  // verificando usuario existente

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      name: "User error",
      message: "User not found",
    });
  }

  // verificando campos do veiculo

  const errorType = [];

  if (typeof title != "string" || !title) {
    errorType.push({ title: "Required field" });
  }

  if (typeof typeVehicle != "string" || !typeVehicle) {
    errorType.push({ typeVehicle: "Required field" });
  }

  if (typeof description != "string" || !description) {
    errorType.push({ description: "Required field" });
  }

  if (typeof images != "object" || !images || images.length === 0) {
    errorType.push({ images: "Required field" });
  }

  if (typeof year != "number" || !year) {
    errorType.push({ year: "Required field" });
  }

  if (typeof mileage != "number" || !mileage) {
    errorType.push({ mileage: "Required field" });
  }

  if (typeof price != "number" || !price) {
    errorType.push({ price: "Required field" });
  }

  if (errorType.length > 0) {
    return res.status(400).json(errorType);
  }

  // verificando os tipos de veiculo

  if (typeVehicle != "motorcycle" && typeVehicle != "car") {
    return res.status(400).json({
      name: "typeVehicle error",
      message: `the ${typeVehicle} vehicle type cannot be registered`,
    });
  }

  next();
};

export default verifyFieldAndVehicleMiddleware;
