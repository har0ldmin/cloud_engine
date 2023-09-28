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
import { ListRolesRequest, ListRolesResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListRolesCommandInput extends ListRolesRequest {}
export interface ListRolesCommandOutput
  extends ListRolesResponse,
    __MetadataBearer {}
export declare class ListRolesCommand extends $Command<
  ListRolesCommandInput,
  ListRolesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListRolesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListRolesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRolesCommandInput, ListRolesCommandOutput>;
  private serialize;
  private deserialize;
}
