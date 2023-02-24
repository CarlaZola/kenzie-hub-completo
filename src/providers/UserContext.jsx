import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/profile");
        } catch (error) {
          localStorage.removeItem("@token");
        }
      };
      autoLogin();
    }
  }, []);

  const userRegister = async (dataRegister) => {
    const newRegister = {
      name: dataRegister.name,
      email: dataRegister.email,
      password: dataRegister.password,
      bio: dataRegister.bio,
      contact: dataRegister.contact,
      course_module: dataRegister.course_module,
    };
    try {
      const response = await api.post("/users", newRegister);
      toast.success("Conta criada com sucesso!", {
        hideProgressBar: true,
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate(`/`);
      }, 1300);

      return response;
    } catch (error) {
      toast.error("Esse email já foi cadastrado!", {
        hideProgressBar: true,
        autoClose: 1000,
      });
    } finally {
      
    }
  };

  const userLogin = async (dataLogin) => {
    try {
      const response = await api.post("/sessions", dataLogin);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.token);
      navigate("/profile");
    } catch (error) {
      toast.error("Email ou senha incorretos", {
        hideProgressBar: true,
        autoClose: 1000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
