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
import { DeleteVirtualMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteVirtualMFADeviceCommandInput
  extends DeleteVirtualMFADeviceRequest {}
export interface DeleteVirtualMFADeviceCommandOutput extends __MetadataBearer {}
export declare class DeleteVirtualMFADeviceCommand extends $Command<
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteVirtualMFADeviceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteVirtualMFADeviceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteVirtualMFADeviceCommandInput,
    DeleteVirtualMFADeviceCommandOutput
  >;
  private serialize;
  private deserialize;
}
