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
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetContextKeysForCustomPolicyCommandInput
  extends GetContextKeysForCustomPolicyRequest {}
export interface GetContextKeysForCustomPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}
export declare class GetContextKeysForCustomPolicyCommand extends $Command<
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetContextKeysForCustomPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetContextKeysForCustomPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetContextKeysForCustomPolicyCommandInput,
    GetContextKeysForCustomPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
