import * as cdk from 'aws-cdk-lib/core';
import {aws_sqs as sqs} from 'aws-cdk-lib';
import { Construct } from 'constructs';

class ComputeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deadLetterQueue = new sqs.Queue(this, 'DeadLetterQueue', {
      retentionPeriod: cdk.Duration.days(14)
    })

    const workerQueue = new sqs.Queue(this, 'WorkerQueue', {
      visibilityTimeout: cdk.Duration.seconds(30),
      retentionPeriod: cdk.Duration.days(7),

      deadLetterQueue: {
        queue: deadLetterQueue,
        maxReceiveCount:7
      }
    })
    
  }
}

export default ComputeStack;
