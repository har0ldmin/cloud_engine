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
import { DeleteGroupPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteGroupPolicyCommandInput
  extends DeleteGroupPolicyRequest {}
export interface DeleteGroupPolicyCommandOutput extends __MetadataBearer {}
export declare class DeleteGroupPolicyCommand extends $Command<
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteGroupPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteGroupPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
