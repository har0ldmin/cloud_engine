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
  CreateInstanceProfileRequest,
  CreateInstanceProfileResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateInstanceProfileCommandInput
  extends CreateInstanceProfileRequest {}
export interface CreateInstanceProfileCommandOutput
  extends CreateInstanceProfileResponse,
    __MetadataBearer {}
export declare class CreateInstanceProfileCommand extends $Command<
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateInstanceProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateInstanceProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput
  >;
  private serialize;
  private deserialize;
}
