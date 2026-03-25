// controller for reviews module

import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"
import { sendResponse } from "../../shared/sendResponse"
import { ReviewsServices } from "./reviews.service"
import status from "http-status"

const CreateReviews =catchAsync(async (req: Request, res: Response) => {
         const user = req.user
        if (!user) {
           return res.status(401).json({ success: false, message: "you are unauthorized" })
        }
        const result=await ReviewsServices.CreateReviews(user.userId,req.params.id as string,req.body)
        sendResponse(res,{
            httpStatusCode:status.CREATED,
            success:true,
            message:'your review has been created successfully',
            data:result
        })
})
export const ReviewsControllers={
    CreateReviews
}