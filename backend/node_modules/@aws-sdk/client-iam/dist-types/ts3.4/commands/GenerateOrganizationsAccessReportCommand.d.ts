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
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GenerateOrganizationsAccessReportCommandInput
  extends GenerateOrganizationsAccessReportRequest {}
export interface GenerateOrganizationsAccessReportCommandOutput
  extends GenerateOrganizationsAccessReportResponse,
    __MetadataBearer {}
export declare class GenerateOrganizationsAccessReportCommand extends $Command<
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GenerateOrganizationsAccessReportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GenerateOrganizationsAccessReportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GenerateOrganizationsAccessReportCommandInput,
    GenerateOrganizationsAccessReportCommandOutput
  >;
  private serialize;
  private deserialize;
}
