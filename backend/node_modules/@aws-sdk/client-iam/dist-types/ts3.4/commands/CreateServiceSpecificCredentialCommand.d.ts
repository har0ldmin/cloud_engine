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
import {
  CreateServiceSpecificCredentialRequest,
  CreateServiceSpecificCredentialResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateServiceSpecificCredentialCommandInput
  extends CreateServiceSpecificCredentialRequest {}
export interface CreateServiceSpecificCredentialCommandOutput
  extends CreateServiceSpecificCredentialResponse,
    __MetadataBearer {}
export declare class CreateServiceSpecificCredentialCommand extends $Command<
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateServiceSpecificCredentialCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateServiceSpecificCredentialCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateServiceSpecificCredentialCommandInput,
    CreateServiceSpecificCredentialCommandOutput
  >;
  private serialize;
  private deserialize;
}
