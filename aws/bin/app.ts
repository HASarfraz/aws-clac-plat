#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import ComputeStack from '../lib/compute-stack';
import DataStack from '../lib/data-stack';

const app = new cdk.App();
new ComputeStack(app, 'ComputeStack', {});
new DataStack(app, 'DataStack',{});
