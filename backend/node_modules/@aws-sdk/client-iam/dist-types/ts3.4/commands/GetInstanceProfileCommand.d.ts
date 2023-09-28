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
  GetInstanceProfileRequest,
  GetInstanceProfileResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetInstanceProfileCommandInput
  extends GetInstanceProfileRequest {}
export interface GetInstanceProfileCommandOutput
  extends GetInstanceProfileResponse,
    __MetadataBearer {}
export declare class GetInstanceProfileCommand extends $Command<
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetInstanceProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetInstanceProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput>;
  private serialize;
  private deserialize;
}
