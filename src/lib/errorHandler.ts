export function getSafeErrorMessage(error: any): string {
  const message = error?.message?.toLowerCase() || '';
  
  // Database constraint violations
  if (message.includes('duplicate') && message.includes('phone')) {
    return 'Этот номер телефона уже зарегистрирован';
  }
  
  if (message.includes('duplicate')) {
    return 'Такая запись уже существует';
  }
  
  if (message.includes('foreign key')) {
    return 'Невозможно выполнить операцию из-за связанных данных';
  }
  
  if (message.includes('violates')) {
    return 'Проверка данных не пройдена';
  }
  
  // Auth errors
  if (message.includes('invalid login credentials')) {
    return 'Неверный номер телефона или пароль';
  }
  
  if (message.includes('user already registered')) {
    return 'Пользователь уже зарегистрирован';
  }
  
  // Network errors
  if (message.includes('network')) {
    return 'Ошибка сети. Проверьте подключение к интернету';
  }
  
  // Generic error
  console.error('Database error:', error);
  return 'Произошла ошибка. Попробуйте позже';
}
