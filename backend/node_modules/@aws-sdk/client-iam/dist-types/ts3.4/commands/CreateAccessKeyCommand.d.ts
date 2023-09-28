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
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateAccessKeyCommandInput extends CreateAccessKeyRequest {}
export interface CreateAccessKeyCommandOutput
  extends CreateAccessKeyResponse,
    __MetadataBearer {}
export declare class CreateAccessKeyCommand extends $Command<
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateAccessKeyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateAccessKeyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput>;
  private serialize;
  private deserialize;
}
