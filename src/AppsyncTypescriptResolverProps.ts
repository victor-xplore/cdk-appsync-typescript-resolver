// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import { aws_appsync } from 'aws-cdk-lib';

/**
 * AppsyncTypescriptResolverProps
 */
export interface AppsyncTypescriptResolverProps {
  /**
   * The API this resolver is attached to.
   * @stability stable
   */
  readonly api: aws_appsync.IGraphqlApi;
  /**
   * The data source this resolver is using.
   * @default - No datasource
   * @stability stable
   */
  readonly dataSource?: aws_appsync.BaseDataSource;
  /**
   * configuration of the pipeline resolver.
   * @default - no pipeline resolver configuration
An empty array | undefined sets resolver to be of kind, unit
   * @stability stable
   */
  readonly pipelineConfig?: Array<aws_appsync.IAppsyncFunction>;
  /**
   * The maximum number of elements per batch, when using batch invoke.
   * @default - No max batch size
   * @stability stable
   */
  readonly maxBatchSize?: number;
  /**
   * The caching configuration for this resolver.
   * @default - No caching configuration
   * @stability stable
   */
  readonly cachingConfig?: aws_appsync.CachingConfig;
  /**
   * name of the GraphQL type this resolver is attached to.
   * @stability stable
   */
  readonly typeName: string;
  /**
   * name of the GraphQL field in the given type this resolver is attached to.
   * @stability stable
   */
  readonly fieldName: string;
  /**
   * A map of replacement strings in the bundled code. e.g { ENV: "PROD" }
   */
  readonly replaceStrings?: Record<string, string>;
  /**
   * Flag to enable or disable source maps in bundled code. defaults to false
   */
  readonly sourceMap?: boolean;
  /**
   * Path of typescript file that will be transpiled and bundled
   */
  readonly path?: string;
}
