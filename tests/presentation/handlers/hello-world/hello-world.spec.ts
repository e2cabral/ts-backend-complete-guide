import { helloWorld } from '../../../../src/presentation/handlers/hello-world/helloWorld';
import { ok } from '../../../../src/helpers/http';

describe('Hello World', () => {
  test('Should return 200 on success', async () => {
    const httpResponse = await helloWorld();
    expect(httpResponse).toEqual(ok(JSON.stringify({ message: 'Hello World!', connection: 'default' })));
  });
});
