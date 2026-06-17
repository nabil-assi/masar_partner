import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/courses', () => {
    return HttpResponse.json([
      { id: '1', title: 'دورة البرمجة الاحترافية', slug: 'pro-coding' }
    ]);
  }),
];