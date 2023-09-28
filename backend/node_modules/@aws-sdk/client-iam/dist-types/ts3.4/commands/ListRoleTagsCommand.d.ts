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
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListRoleTagsCommandInput extends ListRoleTagsRequest {}
export interface ListRoleTagsCommandOutput
  extends ListRoleTagsResponse,
    __MetadataBearer {}
export declare class ListRoleTagsCommand extends $Command<
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListRoleTagsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListRoleTagsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoleTagsCommandInput, ListRoleTagsCommandOutput>;
  private serialize;
  private deserialize;
}
