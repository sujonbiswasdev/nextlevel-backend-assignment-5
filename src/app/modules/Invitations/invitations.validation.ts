import { z } from "zod";

export const createInvitationSchema = z.object({
  inviteeId: z.array(z.string()),
});

export const updateInvitationSchema = z.object({
  status: z.enum(["PENDING", "ACCEPTED", "DECLINED", "CANCELLED"]).optional(),
  paymentStatus: z.enum(["PENDING", "COMPLETED", "FAILED"]).optional(),
});