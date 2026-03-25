import { Router } from "express"
import { validateRequest } from "../../middleware/validateRequest"

import { Role } from "../../../generated/prisma/enums"
import auth from "../../middleware/Auth"
import { EventController } from "./event.controller"
import { CreateEventSchema, UpdateEventSchema } from "./event.validation"

const router=Router()
router.post("/event",auth([Role.ADMIN,Role.USER]),validateRequest(CreateEventSchema), EventController.createEvent)
router.get("/events", EventController.getAllEvents);
router.get("/event/:id", EventController.getSingleEvent);
router.put("/event/:id",auth([Role.ADMIN,Role.USER]),validateRequest(UpdateEventSchema), EventController.updateEvent);
router.delete("/event/:id",auth([Role.ADMIN,Role.USER]), EventController.DeletedEvent);
export const EventRouters=router
