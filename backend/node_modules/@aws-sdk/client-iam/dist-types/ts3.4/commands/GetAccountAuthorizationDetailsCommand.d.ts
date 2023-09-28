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
  GetAccountAuthorizationDetailsRequest,
  GetAccountAuthorizationDetailsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetAccountAuthorizationDetailsCommandInput
  extends GetAccountAuthorizationDetailsRequest {}
export interface GetAccountAuthorizationDetailsCommandOutput
  extends GetAccountAuthorizationDetailsResponse,
    __MetadataBearer {}
export declare class GetAccountAuthorizationDetailsCommand extends $Command<
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetAccountAuthorizationDetailsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccountAuthorizationDetailsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccountAuthorizationDetailsCommandInput,
    GetAccountAuthorizationDetailsCommandOutput
  >;
  private serialize;
  private deserialize;
}
