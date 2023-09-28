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
  ListEntitiesForPolicyRequest,
  ListEntitiesForPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListEntitiesForPolicyCommandInput
  extends ListEntitiesForPolicyRequest {}
export interface ListEntitiesForPolicyCommandOutput
  extends ListEntitiesForPolicyResponse,
    __MetadataBearer {}
export declare class ListEntitiesForPolicyCommand extends $Command<
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListEntitiesForPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEntitiesForPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListEntitiesForPolicyCommandInput,
    ListEntitiesForPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
