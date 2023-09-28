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
import { AttachGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AttachGroupPolicyCommandInput
  extends AttachGroupPolicyRequest {}
export interface AttachGroupPolicyCommandOutput extends __MetadataBearer {}
export declare class AttachGroupPolicyCommand extends $Command<
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AttachGroupPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AttachGroupPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
