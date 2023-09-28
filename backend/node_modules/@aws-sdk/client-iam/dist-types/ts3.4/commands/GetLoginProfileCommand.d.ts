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
  GetLoginProfileRequest,
  GetLoginProfileResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
export interface GetLoginProfileCommandOutput
  extends GetLoginProfileResponse,
    __MetadataBearer {}
export declare class GetLoginProfileCommand extends $Command<
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetLoginProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLoginProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoginProfileCommandInput, GetLoginProfileCommandOutput>;
  private serialize;
  private deserialize;
}
