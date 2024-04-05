import React, { useState, createContext } from "react";

// Components
import Left from "@/components/index/left.component";
import Right from "@/components/index/right.component";

// Font

// Context
const IndexContext = createContext({} as any);
export { IndexContext };

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("-1");
  const [email, setEmail] = useState("test@test.com");
  const [change, setChange] = useState(false);

  return (
    <IndexContext.Provider
      value={{
        id,
        setId,
        loading,
        setLoading,
        email,
        setEmail,
        change,
        setChange,
      }}
    >
      <main className={`flex min-h-[100dvh] `}>
        <Left />
        <Right children={children} />
      </main>
    </IndexContext.Provider>
  );
}
