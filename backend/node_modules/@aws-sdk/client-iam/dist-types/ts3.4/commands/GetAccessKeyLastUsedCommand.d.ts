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
  GetAccessKeyLastUsedRequest,
  GetAccessKeyLastUsedResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetAccessKeyLastUsedCommandInput
  extends GetAccessKeyLastUsedRequest {}
export interface GetAccessKeyLastUsedCommandOutput
  extends GetAccessKeyLastUsedResponse,
    __MetadataBearer {}
export declare class GetAccessKeyLastUsedCommand extends $Command<
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetAccessKeyLastUsedCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccessKeyLastUsedCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccessKeyLastUsedCommandInput,
    GetAccessKeyLastUsedCommandOutput
  >;
  private serialize;
  private deserialize;
}
