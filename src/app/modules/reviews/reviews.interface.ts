import z from "zod";
import { createReviewsData } from "./reviews.validation";

// create reviews type
export type ICreatereviewData=z.infer<typeof createReviewsData>