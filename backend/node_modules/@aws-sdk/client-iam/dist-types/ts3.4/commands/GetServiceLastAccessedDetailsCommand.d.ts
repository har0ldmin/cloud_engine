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
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetServiceLastAccessedDetailsCommandInput
  extends GetServiceLastAccessedDetailsRequest {}
export interface GetServiceLastAccessedDetailsCommandOutput
  extends GetServiceLastAccessedDetailsResponse,
    __MetadataBearer {}
export declare class GetServiceLastAccessedDetailsCommand extends $Command<
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetServiceLastAccessedDetailsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetServiceLastAccessedDetailsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceLastAccessedDetailsCommandInput,
    GetServiceLastAccessedDetailsCommandOutput
  >;
  private serialize;
  private deserialize;
}
