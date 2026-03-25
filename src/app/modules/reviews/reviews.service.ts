import AppError from "../../errorHelper/AppError";
import { prisma } from "../../lib/prisma";
import { ICreatereviewData } from "./reviews.interface";

// service for reviews module
const CreateReviews = async (userId: string, eventId: string, data: ICreatereviewData) => {
    const existingmeal = await prisma.event.findUnique({
        where: {
            id: eventId
            }
    })
    if(!existingmeal){
        throw new AppError(404, "meal not found for this id")
    }
    if (data.rating >= 6) {
      throw new AppError(400, "rating must be between 1 and 5")
    }

    const result = await prisma.review.create({
        data: {
            userId: userId,
            eventId: eventId,
            ...data

        }
    })

    return result

}

export const ReviewsServices={
    CreateReviews
}