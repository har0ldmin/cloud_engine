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
import { CreateAccountAliasRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateAccountAliasCommandInput
  extends CreateAccountAliasRequest {}
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}
export declare class CreateAccountAliasCommand extends $Command<
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateAccountAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateAccountAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput>;
  private serialize;
  private deserialize;
}
