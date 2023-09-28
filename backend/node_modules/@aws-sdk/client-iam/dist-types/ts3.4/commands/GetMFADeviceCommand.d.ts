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
import { GetMFADeviceRequest, GetMFADeviceResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetMFADeviceCommandInput extends GetMFADeviceRequest {}
export interface GetMFADeviceCommandOutput
  extends GetMFADeviceResponse,
    __MetadataBearer {}
export declare class GetMFADeviceCommand extends $Command<
  GetMFADeviceCommandInput,
  GetMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetMFADeviceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetMFADeviceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMFADeviceCommandInput, GetMFADeviceCommandOutput>;
  private serialize;
  private deserialize;
}
