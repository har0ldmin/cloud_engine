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
  ListSAMLProviderTagsRequest,
  ListSAMLProviderTagsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListSAMLProviderTagsCommandInput
  extends ListSAMLProviderTagsRequest {}
export interface ListSAMLProviderTagsCommandOutput
  extends ListSAMLProviderTagsResponse,
    __MetadataBearer {}
export declare class ListSAMLProviderTagsCommand extends $Command<
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListSAMLProviderTagsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListSAMLProviderTagsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSAMLProviderTagsCommandInput,
    ListSAMLProviderTagsCommandOutput
  >;
  private serialize;
  private deserialize;
}
