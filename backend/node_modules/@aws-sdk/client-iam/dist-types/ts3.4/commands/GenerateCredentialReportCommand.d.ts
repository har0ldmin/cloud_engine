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
import { GenerateCredentialReportResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GenerateCredentialReportCommandInput {}
export interface GenerateCredentialReportCommandOutput
  extends GenerateCredentialReportResponse,
    __MetadataBearer {}
export declare class GenerateCredentialReportCommand extends $Command<
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GenerateCredentialReportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GenerateCredentialReportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GenerateCredentialReportCommandInput,
    GenerateCredentialReportCommandOutput
  >;
  private serialize;
  private deserialize;
}
