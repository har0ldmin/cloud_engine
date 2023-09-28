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
  GetOpenIDConnectProviderRequest,
  GetOpenIDConnectProviderResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetOpenIDConnectProviderCommandInput
  extends GetOpenIDConnectProviderRequest {}
export interface GetOpenIDConnectProviderCommandOutput
  extends GetOpenIDConnectProviderResponse,
    __MetadataBearer {}
export declare class GetOpenIDConnectProviderCommand extends $Command<
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetOpenIDConnectProviderCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOpenIDConnectProviderCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOpenIDConnectProviderCommandInput,
    GetOpenIDConnectProviderCommandOutput
  >;
  private serialize;
  private deserialize;
}
