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
import { DetachUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DetachUserPolicyCommandInput extends DetachUserPolicyRequest {}
export interface DetachUserPolicyCommandOutput extends __MetadataBearer {}
export declare class DetachUserPolicyCommand extends $Command<
  DetachUserPolicyCommandInput,
  DetachUserPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DetachUserPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DetachUserPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
