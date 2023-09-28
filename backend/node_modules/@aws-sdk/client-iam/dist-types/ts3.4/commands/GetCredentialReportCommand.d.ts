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
import { GetCredentialReportResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetCredentialReportCommandInput {}
export interface GetCredentialReportCommandOutput
  extends GetCredentialReportResponse,
    __MetadataBearer {}
export declare class GetCredentialReportCommand extends $Command<
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetCredentialReportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCredentialReportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCredentialReportCommandInput, GetCredentialReportCommandOutput>;
  private serialize;
  private deserialize;
}
