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
import { GetAccountPasswordPolicyResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetAccountPasswordPolicyCommandInput {}
export interface GetAccountPasswordPolicyCommandOutput
  extends GetAccountPasswordPolicyResponse,
    __MetadataBearer {}
export declare class GetAccountPasswordPolicyCommand extends $Command<
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetAccountPasswordPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccountPasswordPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccountPasswordPolicyCommandInput,
    GetAccountPasswordPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
