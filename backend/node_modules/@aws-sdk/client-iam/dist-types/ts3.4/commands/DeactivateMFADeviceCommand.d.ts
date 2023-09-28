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
import { DeactivateMFADeviceRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeactivateMFADeviceCommandInput
  extends DeactivateMFADeviceRequest {}
export interface DeactivateMFADeviceCommandOutput extends __MetadataBearer {}
export declare class DeactivateMFADeviceCommand extends $Command<
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeactivateMFADeviceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeactivateMFADeviceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput>;
  private serialize;
  private deserialize;
}
