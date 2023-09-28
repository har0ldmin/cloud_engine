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
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GenerateServiceLastAccessedDetailsCommandInput
  extends GenerateServiceLastAccessedDetailsRequest {}
export interface GenerateServiceLastAccessedDetailsCommandOutput
  extends GenerateServiceLastAccessedDetailsResponse,
    __MetadataBearer {}
export declare class GenerateServiceLastAccessedDetailsCommand extends $Command<
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GenerateServiceLastAccessedDetailsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GenerateServiceLastAccessedDetailsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GenerateServiceLastAccessedDetailsCommandInput,
    GenerateServiceLastAccessedDetailsCommandOutput
  >;
  private serialize;
  private deserialize;
}
