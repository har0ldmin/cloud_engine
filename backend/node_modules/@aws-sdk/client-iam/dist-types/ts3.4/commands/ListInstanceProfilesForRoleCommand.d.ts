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
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListInstanceProfilesForRoleCommandInput
  extends ListInstanceProfilesForRoleRequest {}
export interface ListInstanceProfilesForRoleCommandOutput
  extends ListInstanceProfilesForRoleResponse,
    __MetadataBearer {}
export declare class ListInstanceProfilesForRoleCommand extends $Command<
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListInstanceProfilesForRoleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListInstanceProfilesForRoleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInstanceProfilesForRoleCommandInput,
    ListInstanceProfilesForRoleCommandOutput
  >;
  private serialize;
  private deserialize;
}
