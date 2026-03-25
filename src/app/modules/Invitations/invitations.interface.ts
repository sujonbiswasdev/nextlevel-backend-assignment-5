import { z } from "zod";
import { createInvitationSchema, updateInvitationSchema } from "./invitations.validation";
export interface ICreateInvitationInput extends z.infer<typeof createInvitationSchema> {}

export interface IInvitationInput {
  inviteeId: string[];
}