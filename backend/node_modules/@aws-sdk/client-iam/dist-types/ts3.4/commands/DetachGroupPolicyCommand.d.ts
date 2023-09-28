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
import { DetachGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DetachGroupPolicyCommandInput
  extends DetachGroupPolicyRequest {}
export interface DetachGroupPolicyCommandOutput extends __MetadataBearer {}
export declare class DetachGroupPolicyCommand extends $Command<
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DetachGroupPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DetachGroupPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
