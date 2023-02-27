import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import * as CdkApp from '../stack/cdk-basics-sqs-lambda-stack'

describe('CdkBasicsSqsLambdaStack', () => {
  const app = new cdk.App()
  const stack = new CdkApp.CdkBasicsSqsLambdaStack(app, 'MyTestStack')

  test('should have 1 lambda functions.', () => {
    // Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 1)
  })
  test('should have 1 SQS queue.', () => {
    // Template.fromStack(stack).resourceCountIs('AWS::SQS::Queue', 1)
  })
})
