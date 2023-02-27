import { Stack, StackProps, RemovalPolicy, Duration } from 'aws-cdk-lib'
import * as sqs from 'aws-cdk-lib/aws-sqs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { SqsEventSource, SqsEventSourceProps } from 'aws-cdk-lib/aws-lambda-event-sources'
import { Construct } from 'constructs'

interface SqsLambdaProps extends StackProps {
  // TODO define the options here.
  dummy?: string
}

export class SqsLambda extends Construct {
  public readonly inputQueue: sqs.Queue
  public readonly lambdaFunc: lambda.Function

  public constructor(scope: Construct, id: string, props?: SqsLambdaProps) {
    super(scope, id)

    this.inputQueue = new sqs.Queue(this, 'InputQueue', {
      // TODO provide the queue props here.
    })

    this.lambdaFunc = new lambda.Function(this, 'Function', {
      architecture: lambda.Architecture.X86_64,
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('./bundle/mylambda'),
      handler: 'index.handler',
      // TODO provide any other props here.
    })

    // TODO grant lambda to consume the queue here.

    // TODO add the queue to the lambda as an event source.
  }
}
