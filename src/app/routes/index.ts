import { Router } from "express";
import { AuthRouters } from "../modules/auth/auth.route";
import { EventRouters } from "../modules/event/event.route";
import { InvitationsRouters } from "../modules/Invitations/invitations.route";

const router = Router()
router.use("/auth", AuthRouters);
// event
router.use("/v1/event", EventRouters);

// invitations
router.use("/v1/invitation", InvitationsRouters);
export const IndexRouter=router