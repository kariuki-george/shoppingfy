import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster /> {children}
    </QueryClientProvider>
  );
}

export default Providers;

// const Root = ({ children }) => {
//   const router = useRouter();
//   const [token, setToken] = useState("");
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const Token = window?.localStorage.getItem("token");
//     const User = window?.localStorage.getItem("user");
//     if (!(Token && User)) {
//       return router.push("/login");
//     }
//     setUser(User);
//     setToken(Token);
//   }, []);

//   const getMe = async () => {
//     await axios.post("/auth/profile", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },

//       email: user.email,
//     });
//   };

//   const useMe = () => {
//     useQuery("user", getMe, {
//       retry: 0,
//       // should be refetched in the background every 8 hours
//       staleTime: 1000 * 60 * 60 * 8,
//     });
//   };
//   const { isLoading, isSuccess, data } = useMe();
//   const isLoggedIn = isSuccess && data.message !== "unauthenticated";

//   if (isLoading) {
//     return "loading";
//   }

//   if (!isLoggedIn) {
//     router.push("/login");
//   }
// };
