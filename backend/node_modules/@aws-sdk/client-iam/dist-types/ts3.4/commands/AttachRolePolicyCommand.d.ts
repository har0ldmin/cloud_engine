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
import { AttachRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AttachRolePolicyCommandInput extends AttachRolePolicyRequest {}
export interface AttachRolePolicyCommandOutput extends __MetadataBearer {}
export declare class AttachRolePolicyCommand extends $Command<
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AttachRolePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AttachRolePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput>;
  private serialize;
  private deserialize;
}
