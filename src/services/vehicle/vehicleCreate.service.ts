import prisma from "../../database";
import { IVehicle } from "../../interfaces/vehicle";

const vehicleCreateService = async ({
  id,
  title,
  typeVehicle,
  description,
  year,
  mileage,
  price,
}: IVehicle) => {
  const vehicle = await prisma.vehicle.create({
    data: {
      title,
      typeVehicle,
      description,
      year,
      mileage,
      price,
      userId: id,
    },
  });

  return vehicle
};

export default vehicleCreateService;
