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
import { DeleteLoginProfileRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteLoginProfileCommandInput
  extends DeleteLoginProfileRequest {}
export interface DeleteLoginProfileCommandOutput extends __MetadataBearer {}
export declare class DeleteLoginProfileCommand extends $Command<
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteLoginProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteLoginProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput>;
  private serialize;
  private deserialize;
}
