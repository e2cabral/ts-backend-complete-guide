import { APIGatewayEventRequestContextWithAuthorizer, APIGatewayProxyEvent } from 'aws-lambda';
import { helloWorld } from '../../../../src/presentation/controllers/hello-world/hello-world';

const mockRequest = () => ({
  body: null,
  headers: {},
  multiValueHeaders: {},
  httpMethod: 'post',
  isBase64Encoded: false,
  path: '/books',
  pathParameters: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  stageVariables: null,
  requestContext: {} as APIGatewayEventRequestContextWithAuthorizer<any>,
  resource: 'create',
} as APIGatewayProxyEvent);

describe('Hello World', () => {
  test('Should return 200 on success', async () => {
    const httpResponse = await helloWorld(mockRequest());
    expect(httpResponse).toEqual({ statusCode: 200, body: JSON.stringify({ message: 'Hello World' }) });
  });
});