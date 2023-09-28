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
  ListOpenIDConnectProviderTagsRequest,
  ListOpenIDConnectProviderTagsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListOpenIDConnectProviderTagsCommandInput
  extends ListOpenIDConnectProviderTagsRequest {}
export interface ListOpenIDConnectProviderTagsCommandOutput
  extends ListOpenIDConnectProviderTagsResponse,
    __MetadataBearer {}
export declare class ListOpenIDConnectProviderTagsCommand extends $Command<
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListOpenIDConnectProviderTagsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListOpenIDConnectProviderTagsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListOpenIDConnectProviderTagsCommandInput,
    ListOpenIDConnectProviderTagsCommandOutput
  >;
  private serialize;
  private deserialize;
}
