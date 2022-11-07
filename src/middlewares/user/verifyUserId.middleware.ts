import { NextFunction, Request, Response } from "express";
import prisma from "../../database";

const verifyUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  const id = req.userId;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res
      .status(404)
      .json({
        error: "Error user",
        message: "User not found",
        statusCode: 404,
      });
  }

  if (userId != id) {
    return res
      .status(403)
      .json({
        error: "Error id",
        message: "you cannot update or delete another user",
        statusCode: 403,
      });
  }
};

export default verifyUserIdMiddleware;
