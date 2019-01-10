# Node & Express ES6 Serverless Starter

This is my boilerplate for creating serverless lambdas using the [Serverless](http://serverless.com) framework.

  - Express
  - Webpack
  - Babel

# Getting Started

Install npm global serverless:
`npm install -g serverless`

Pull down this repo and cd into the directory
`git clone git@github.com:christopherarter/serverless-starter.git && cd serverless-starter`

You will need AWS key and secret. I will be adding the proper user policy config file later. But for now, you need to set the env variables:

```
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
# AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are now available for serverless to use
```

Next:
`npm install`

To start serverless locally, run:
`sls offline start`

To deploy to AWS:
`sls deploy`

For detailed documentaiton, visit [Serverless.com](http://serverless.com).