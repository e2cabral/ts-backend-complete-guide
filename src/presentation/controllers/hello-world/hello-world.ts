import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloWorld = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
