import { Cafe24WebhookBody, Cafe24WebhookEventMap, Cafe24WebhookEventNo } from "./eventTypes";

export function createWebhookHandler<E extends Cafe24WebhookEventNo>(
  handlers: { [K in E]: (payload: Cafe24WebhookEventMap[K]) => void | Promise<void> }
) {
  return async function handleWebhook(webhook: Cafe24WebhookBody<Cafe24WebhookEventNo, any>): Promise<void> {
    const { event_no, resource } = webhook;
    
    if (!(event_no in handlers)) {
      throw new Error(`${event_no} 이벤트의 핸들러가 정의되지 않았습니다.`);
    }
    
    const result = handlers[event_no as E](resource as Cafe24WebhookEventMap[E]);
    
    if (result instanceof Promise) {
      await result;
    }
  };
}