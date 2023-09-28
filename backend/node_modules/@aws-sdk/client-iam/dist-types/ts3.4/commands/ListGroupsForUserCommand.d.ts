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
  ListGroupsForUserRequest,
  ListGroupsForUserResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListGroupsForUserCommandInput
  extends ListGroupsForUserRequest {}
export interface ListGroupsForUserCommandOutput
  extends ListGroupsForUserResponse,
    __MetadataBearer {}
export declare class ListGroupsForUserCommand extends $Command<
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListGroupsForUserCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListGroupsForUserCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput>;
  private serialize;
  private deserialize;
}
