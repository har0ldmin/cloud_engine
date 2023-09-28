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
import { ChangePasswordRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ChangePasswordCommandInput extends ChangePasswordRequest {}
export interface ChangePasswordCommandOutput extends __MetadataBearer {}
export declare class ChangePasswordCommand extends $Command<
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ChangePasswordCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ChangePasswordCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangePasswordCommandInput, ChangePasswordCommandOutput>;
  private serialize;
  private deserialize;
}
