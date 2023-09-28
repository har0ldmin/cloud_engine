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
  GetOrganizationsAccessReportRequest,
  GetOrganizationsAccessReportResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetOrganizationsAccessReportCommandInput
  extends GetOrganizationsAccessReportRequest {}
export interface GetOrganizationsAccessReportCommandOutput
  extends GetOrganizationsAccessReportResponse,
    __MetadataBearer {}
export declare class GetOrganizationsAccessReportCommand extends $Command<
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetOrganizationsAccessReportCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOrganizationsAccessReportCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOrganizationsAccessReportCommandInput,
    GetOrganizationsAccessReportCommandOutput
  >;
  private serialize;
  private deserialize;
}
