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
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListServerCertificatesCommandInput
  extends ListServerCertificatesRequest {}
export interface ListServerCertificatesCommandOutput
  extends ListServerCertificatesResponse,
    __MetadataBearer {}
export declare class ListServerCertificatesCommand extends $Command<
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListServerCertificatesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListServerCertificatesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListServerCertificatesCommandInput,
    ListServerCertificatesCommandOutput
  >;
  private serialize;
  private deserialize;
}
