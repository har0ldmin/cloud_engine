import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteServiceSpecificCredentialRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteServiceSpecificCredentialCommandInput
  extends DeleteServiceSpecificCredentialRequest {}
export interface DeleteServiceSpecificCredentialCommandOutput
  extends __MetadataBearer {}
export declare class DeleteServiceSpecificCredentialCommand extends $Command<
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteServiceSpecificCredentialCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteServiceSpecificCredentialCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteServiceSpecificCredentialCommandInput,
    DeleteServiceSpecificCredentialCommandOutput
  >;
  private serialize;
  private deserialize;
}
