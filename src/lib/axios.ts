import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// هذا سيُطبق على كل طلب يخرج من منصتك
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // هنا مكان معالجة أخطاء 401 أو 500 مركزياً
    return Promise.reject(error);
  }
);