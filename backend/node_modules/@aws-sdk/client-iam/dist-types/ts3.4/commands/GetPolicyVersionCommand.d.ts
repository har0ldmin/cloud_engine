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
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {}
export interface GetPolicyVersionCommandOutput
  extends GetPolicyVersionResponse,
    __MetadataBearer {}
export declare class GetPolicyVersionCommand extends $Command<
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetPolicyVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPolicyVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput>;
  private serialize;
  private deserialize;
}
