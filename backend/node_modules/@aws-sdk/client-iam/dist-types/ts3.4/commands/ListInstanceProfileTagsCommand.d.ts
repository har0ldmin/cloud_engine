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
  ListInstanceProfileTagsRequest,
  ListInstanceProfileTagsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListInstanceProfileTagsCommandInput
  extends ListInstanceProfileTagsRequest {}
export interface ListInstanceProfileTagsCommandOutput
  extends ListInstanceProfileTagsResponse,
    __MetadataBearer {}
export declare class ListInstanceProfileTagsCommand extends $Command<
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListInstanceProfileTagsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListInstanceProfileTagsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInstanceProfileTagsCommandInput,
    ListInstanceProfileTagsCommandOutput
  >;
  private serialize;
  private deserialize;
}
