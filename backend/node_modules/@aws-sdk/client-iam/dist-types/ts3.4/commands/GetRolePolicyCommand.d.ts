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
import {
  GetRolePolicyRequest,
  GetRolePolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetRolePolicyCommandInput extends GetRolePolicyRequest {}
export interface GetRolePolicyCommandOutput
  extends GetRolePolicyResponse,
    __MetadataBearer {}
export declare class GetRolePolicyCommand extends $Command<
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetRolePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetRolePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRolePolicyCommandInput, GetRolePolicyCommandOutput>;
  private serialize;
  private deserialize;
}
