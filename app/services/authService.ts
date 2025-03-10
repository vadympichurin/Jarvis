interface TokenData {
    accessToken: string;
    expiresAt: number;
  }
  
  interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    jti: string;
  }
  
  class AuthService {
    private static TOKEN_KEY = 'auth_token';
    private static TOKEN_EXPIRY_KEY = 'auth_token_expiry';
  
    static saveToken(tokenData: TokenResponse): void {
      const expiresAt = Date.now() + (tokenData.expires_in * 1000);
      sessionStorage.setItem(this.TOKEN_KEY, tokenData.access_token);
      sessionStorage.setItem(this.TOKEN_EXPIRY_KEY, expiresAt.toString());
    }
     
    static getToken(): TokenData | null {
      const token = sessionStorage.getItem(this.TOKEN_KEY);
      const expiresAt = sessionStorage.getItem(this.TOKEN_EXPIRY_KEY);
      
      if (!token || !expiresAt) return null;
      
      return {
        accessToken: token,
        expiresAt: parseInt(expiresAt)
      };
    }
    
    static isTokenExpired(): boolean {
      const tokenData = this.getToken();
      if (!tokenData) return true;
      return Date.now() > (tokenData.expiresAt - 300000); 
    }
  
    static async initializeToken(): Promise<string | null> {
      const tokenData = this.getToken();
      if (tokenData && !this.isTokenExpired()) {
        return tokenData.accessToken;
      }
  
      try {
        const response = await fetch('/api/auth', {
          method: 'POST',
        });
        const tokenData = await response.json();
        this.saveToken(tokenData);
        return tokenData.access_token;
      } catch (error) {
        console.error('Failed to initialize token:', error);
        return null;
      }
    }
  
    static async refreshTokenIfNeeded(): Promise<string> {
      if (this.isTokenExpired()) {
        try {
          const response = await fetch('/api/auth', {
            method: 'POST',
          });
          const tokenData = await response.json();
          this.saveToken(tokenData);
          return tokenData.access_token;
        } catch (error) {
          console.error('Failed to refresh token:', error);
          throw error;
        }
      }
      return this.getToken()!.accessToken;
    }
  
    static clearToken(): void {
      sessionStorage.removeItem(this.TOKEN_KEY);
      sessionStorage.removeItem(this.TOKEN_EXPIRY_KEY);
    }
  }
  
  export default AuthService;