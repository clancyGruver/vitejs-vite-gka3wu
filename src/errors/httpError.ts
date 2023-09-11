/*
Необхоимо заполнить отсутствующие описания для кодов codeNames
*/

/**
 * Основано на следующих RFC:
 * - rfc2119
 * - rfc2295
 * - rfc2774
 * - rfc4918
 * - rfc5842
 * - rfc6585
 * - rfc7168
 * - rfc7231
 * - rfc7232
 * - rfc7233
 * - rfc7235
 * - rfc7725
 * - rfc9110
 */

const codeNames: Record<number, string> = {
  400: '', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
  401: '', // https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
  402: 'Требуется оплата', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
  403: '', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
  404: '', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
  405: '', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
  406: 'Не могу вернуть ответ, соответствующий списку допустимых значений', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
  407: 'Требуется авторизация на прокси сервере', // https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
  408: '', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
  409: 'Конфликт', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
  410: 'Ресурс больше недоступен', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
  411: 'Отсутствует заголовок Content-Length', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
  412: 'Доступ к ресурсу был отклонён', // https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
  413: 'Превышен объект запроса', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
  414: 'Слишком длинный URI', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
  415: 'Неподдердиваемый формат', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
  416: 'Сервер не может обслуживать запрошенные диапазоны', // https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
  417: 'Ожидание, указанное в Expect не может быть выполнена', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
  418: 'Не могу приготовить кофе, потому что я чайник', // https://datatracker.ietf.org/doc/html/rfc7168#section-2.3.3
  419: 'CSRF-токен устарел или оказался некорректным', // альтернатива 401
  421: 'Запрос был перенаправлен на сервер, не способный дать ответ.', // https://www.rfc-editor.org/rfc/rfc9110#section-15.5.20
  422: 'Не удалось обработать инструкции содержимого', // https://www.rfc-editor.org/rfc/rfc9110#section-15.5.21
  423: 'Ресурс заблокирован', // https://www.rfc-editor.org/rfc/rfc4918#section-11.3
  424: 'Нельзя выполнить текущий запрос, зависящий от другого', // https://www.rfc-editor.org/rfc/rfc4918#section-11.4
  426: 'Требуется повысить протокол', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
  429: 'Слишком много запросов', // https://datatracker.ietf.org/doc/html/rfc6585#section-4
  431: 'Поля заголовка слишком велики', // https://datatracker.ietf.org/doc/html/rfc6585#section-5
  451: 'Доступ к ресурсу закрыт по юридическим причинам', // https://datatracker.ietf.org/doc/html/rfc7725#section-3
  499: 'Клиент закрыл соединение, пока nginx обрабатывал запрос', // nginx специфичный код
  500: 'Внутренняя ошибка сервера', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
  501: 'Не реализовано', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
  502: 'Неверный ответ от восходящего сервера', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
  503: 'Сервис не доступен', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
  504: 'Не могу получить ответ вовремя', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
  505: 'Версия HTTP, используемая в запросе, не поддерживается сервером', // https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
  506: 'Выбранный вариант указывает сам на себя', // https://www.rfc-editor.org/rfc/rfc2295#section-8.1
  507: 'Не хватает места для выполнения запроса', // https://www.rfc-editor.org/rfc/rfc4918#section-11.5
  508: 'Бесконечный цикл', // https://www.rfc-editor.org/rfc/rfc5842#section-7.2
  509: 'Превышено ограничение на потребление трафика', // cPanel специфичный код
  510: 'На сервере отсутствует расширение', // https://www.rfc-editor.org/rfc/rfc2774#section-7
  511: 'Требуется авторизация в сети', // https://www.rfc-editor.org/rfc/rfc6585#section-6
};
export class HttpError extends Error {
  name = 'HTTP ERROR';
  statusCode: number;

  constructor(code: number) {
    super(codeNames[code] || '');
    this.statusCode = code;
  }
}
