import Action, {
  ActionContext,
  GetContext,
} from './Action';


export interface ExitContext extends ActionContext {
  messageBody: string;
}


export default class Exit extends Action {
  private readonly messageBody: string;

  constructor(messageBody: string) {
    super();
    this.messageBody = messageBody;
    this[GetContext] = this.getExitContext.bind(this);
  }

  private getExitContext(): ExitContext {
    return { messageBody: this.messageBody };
  }
}
