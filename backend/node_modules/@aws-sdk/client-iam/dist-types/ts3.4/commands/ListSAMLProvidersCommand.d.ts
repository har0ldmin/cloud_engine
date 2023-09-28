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
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListSAMLProvidersCommandInput
  extends ListSAMLProvidersRequest {}
export interface ListSAMLProvidersCommandOutput
  extends ListSAMLProvidersResponse,
    __MetadataBearer {}
export declare class ListSAMLProvidersCommand extends $Command<
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListSAMLProvidersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListSAMLProvidersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput>;
  private serialize;
  private deserialize;
}
