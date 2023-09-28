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
  CreateLoginProfileRequest,
  CreateLoginProfileResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateLoginProfileCommandInput
  extends CreateLoginProfileRequest {}
export interface CreateLoginProfileCommandOutput
  extends CreateLoginProfileResponse,
    __MetadataBearer {}
export declare class CreateLoginProfileCommand extends $Command<
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateLoginProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateLoginProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput>;
  private serialize;
  private deserialize;
}
