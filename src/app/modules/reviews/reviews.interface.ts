import z from "zod";
import { createReviewsData, updateReviewsData } from "./reviews.validation";

// create reviews type
export interface ICreatereviewData extends z.infer<typeof createReviewsData>{}

// update reviews type
export interface IUpdatereviewData extends  z.infer<typeof updateReviewsData>{}