export const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        // Simpan status login dan data pengguna
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'Error logging in' };
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };
  