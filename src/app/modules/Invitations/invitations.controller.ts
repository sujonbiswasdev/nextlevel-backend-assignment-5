import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { invitationsServices } from "./invitations.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const CreateInvitation = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const id=req.params.id
  const result = await invitationsServices.createInvitationService(id as string,user.userId,req.body);

  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "invitations created successfully",
    data: result,
  });
});


export const InvitationController={
CreateInvitation
}
