import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User } from "../types";
import {
  getCurrentUser,
  setCurrentUser,
  getUsers,
  saveUser,
  initializeStorage,
} from "../utils/storage";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Initialize storage on first load
    initializeStorage();

    // Check for existing user session
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would validate against a backend
    // For demo purposes, we check if user exists
    const users = getUsers();
    const foundUser = users.find((u) => u.email === email);

    if (foundUser) {
      // Check password for admin
      if (foundUser.role === "admin" && password !== "praveen") {
        return false;
      }
      setUser(foundUser);
      setCurrentUser(foundUser);
      return true;
    }

    return false;
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
  ): Promise<boolean> => {
    // Check if user already exists
    const users = getUsers();
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return false;
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      role: "student",
      createdAt: new Date().toISOString(),
    };

    saveUser(newUser);
    setUser(newUser);
    setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    setCurrentUser(null);
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
