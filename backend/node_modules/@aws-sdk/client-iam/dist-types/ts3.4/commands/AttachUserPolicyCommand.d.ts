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
import { AttachUserPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AttachUserPolicyCommandInput extends AttachUserPolicyRequest {}
export interface AttachUserPolicyCommandOutput extends __MetadataBearer {}
export declare class AttachUserPolicyCommand extends $Command<
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AttachUserPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AttachUserPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
