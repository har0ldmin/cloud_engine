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
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetServiceLinkedRoleDeletionStatusCommandInput
  extends GetServiceLinkedRoleDeletionStatusRequest {}
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}
export declare class GetServiceLinkedRoleDeletionStatusCommand extends $Command<
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetServiceLinkedRoleDeletionStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetServiceLinkedRoleDeletionStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceLinkedRoleDeletionStatusCommandInput,
    GetServiceLinkedRoleDeletionStatusCommandOutput
  >;
  private serialize;
  private deserialize;
}
