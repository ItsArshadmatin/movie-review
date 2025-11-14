// Mock login service - replace with actual API call
export const login = async (email, password) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock successful login
  if (email === 'test@example.com' && password === 'password') {
    return {
      status: 'success',
      data: {
        token: 'mock-jwt-token',
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  }
  
  return {
    status: 'error',
    error: 'Invalid email or password'
  }
}
