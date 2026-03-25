// route for reviews module
import { Router } from "express"
import { validateRequest } from "../../middleware/validateRequest"

import { Role } from "../../../generated/prisma/enums"
import auth from "../../middleware/Auth"
import { ReviewsControllers } from "./reviews.controller"
import { createReviewsData } from "./reviews.validation"

const router=Router()
router.post("/event/:id/review",validateRequest(createReviewsData),auth([Role.USER]),ReviewsControllers.CreateReviews)
export const ReviewsRouters=router