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
  ListMFADevicesRequest,
  ListMFADevicesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListMFADevicesCommandInput extends ListMFADevicesRequest {}
export interface ListMFADevicesCommandOutput
  extends ListMFADevicesResponse,
    __MetadataBearer {}
export declare class ListMFADevicesCommand extends $Command<
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListMFADevicesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListMFADevicesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMFADevicesCommandInput, ListMFADevicesCommandOutput>;
  private serialize;
  private deserialize;
}
