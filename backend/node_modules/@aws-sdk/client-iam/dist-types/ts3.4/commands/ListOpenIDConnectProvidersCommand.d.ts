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
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListOpenIDConnectProvidersCommandInput
  extends ListOpenIDConnectProvidersRequest {}
export interface ListOpenIDConnectProvidersCommandOutput
  extends ListOpenIDConnectProvidersResponse,
    __MetadataBearer {}
export declare class ListOpenIDConnectProvidersCommand extends $Command<
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListOpenIDConnectProvidersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListOpenIDConnectProvidersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListOpenIDConnectProvidersCommandInput,
    ListOpenIDConnectProvidersCommandOutput
  >;
  private serialize;
  private deserialize;
}
