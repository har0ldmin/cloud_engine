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
  GetServerCertificateRequest,
  GetServerCertificateResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetServerCertificateCommandInput
  extends GetServerCertificateRequest {}
export interface GetServerCertificateCommandOutput
  extends GetServerCertificateResponse,
    __MetadataBearer {}
export declare class GetServerCertificateCommand extends $Command<
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetServerCertificateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetServerCertificateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServerCertificateCommandInput,
    GetServerCertificateCommandOutput
  >;
  private serialize;
  private deserialize;
}
