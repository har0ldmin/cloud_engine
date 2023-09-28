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
import { DeleteRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteRolePolicyCommandInput extends DeleteRolePolicyRequest {}
export interface DeleteRolePolicyCommandOutput extends __MetadataBearer {}
export declare class DeleteRolePolicyCommand extends $Command<
  DeleteRolePolicyCommandInput,
  DeleteRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteRolePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteRolePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput>;
  private serialize;
  private deserialize;
}
