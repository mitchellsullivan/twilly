import Exit from './Exit';
import { GetContext, ActionGetContext } from './Action';
import { uniqueString } from '../util';


test('Exit should set its messageBody with the constructor and it should be saved to context', () => {
  const messageBody = uniqueString();
  const exit = new Exit(messageBody);

  expect(exit[GetContext]()).toEqual({ messageBody });
  expect(exit[ActionGetContext]()).toHaveProperty('type', 'Exit');
});