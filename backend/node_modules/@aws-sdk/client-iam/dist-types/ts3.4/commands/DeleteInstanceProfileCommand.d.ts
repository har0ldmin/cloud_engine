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
import { DeleteInstanceProfileRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteInstanceProfileCommandInput
  extends DeleteInstanceProfileRequest {}
export interface DeleteInstanceProfileCommandOutput extends __MetadataBearer {}
export declare class DeleteInstanceProfileCommand extends $Command<
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteInstanceProfileCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteInstanceProfileCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteInstanceProfileCommandInput,
    DeleteInstanceProfileCommandOutput
  >;
  private serialize;
  private deserialize;
}
