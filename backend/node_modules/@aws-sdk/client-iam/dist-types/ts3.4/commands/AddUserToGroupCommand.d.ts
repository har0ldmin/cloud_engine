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
import { AddUserToGroupRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {}
export interface AddUserToGroupCommandOutput extends __MetadataBearer {}
export declare class AddUserToGroupCommand extends $Command<
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AddUserToGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AddUserToGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddUserToGroupCommandInput, AddUserToGroupCommandOutput>;
  private serialize;
  private deserialize;
}
