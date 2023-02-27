import { Stack, StackProps, CfnOutput, RemovalPolicy } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { SqsLambda } from '../lib/sqs-lambda'

export class CdkBasicsSqsLambdaStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const sqsLambda = new SqsLambda(this, 'SqsLambda', {
      // TODO provide options here.
    })

    // TODO output the ARNs of the resources here.
  }
}
