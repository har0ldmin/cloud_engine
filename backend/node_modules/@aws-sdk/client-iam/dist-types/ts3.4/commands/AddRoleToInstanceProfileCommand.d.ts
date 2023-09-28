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
import { AddRoleToInstanceProfileRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AddRoleToInstanceProfileCommandInput
  extends AddRoleToInstanceProfileRequest {}
export interface AddRoleToInstanceProfileCommandOutput
  extends __MetadataBearer {}
export declare class AddRoleToInstanceProfileCommand extends $Command<
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AddRoleToInstanceProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AddRoleToInstanceProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddRoleToInstanceProfileCommandInput,
    AddRoleToInstanceProfileCommandOutput
  >;
  private serialize;
  private deserialize;
}
