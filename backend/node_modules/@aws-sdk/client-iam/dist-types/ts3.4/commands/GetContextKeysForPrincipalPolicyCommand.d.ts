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
  GetContextKeysForPolicyResponse,
  GetContextKeysForPrincipalPolicyRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetContextKeysForPrincipalPolicyCommandInput
  extends GetContextKeysForPrincipalPolicyRequest {}
export interface GetContextKeysForPrincipalPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}
export declare class GetContextKeysForPrincipalPolicyCommand extends $Command<
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetContextKeysForPrincipalPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetContextKeysForPrincipalPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetContextKeysForPrincipalPolicyCommandInput,
    GetContextKeysForPrincipalPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
