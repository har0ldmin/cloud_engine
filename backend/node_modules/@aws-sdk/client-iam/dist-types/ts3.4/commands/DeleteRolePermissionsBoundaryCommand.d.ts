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
import { DeleteRolePermissionsBoundaryRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteRolePermissionsBoundaryCommandInput
  extends DeleteRolePermissionsBoundaryRequest {}
export interface DeleteRolePermissionsBoundaryCommandOutput
  extends __MetadataBearer {}
export declare class DeleteRolePermissionsBoundaryCommand extends $Command<
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteRolePermissionsBoundaryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteRolePermissionsBoundaryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteRolePermissionsBoundaryCommandInput,
    DeleteRolePermissionsBoundaryCommandOutput
  >;
  private serialize;
  private deserialize;
}
