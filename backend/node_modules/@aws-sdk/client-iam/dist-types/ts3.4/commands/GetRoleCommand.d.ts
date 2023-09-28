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
import { GetRoleRequest, GetRoleResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetRoleCommandInput extends GetRoleRequest {}
export interface GetRoleCommandOutput
  extends GetRoleResponse,
    __MetadataBearer {}
export declare class GetRoleCommand extends $Command<
  GetRoleCommandInput,
  GetRoleCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetRoleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetRoleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoleCommandInput, GetRoleCommandOutput>;
  private serialize;
  private deserialize;
}
