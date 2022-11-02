import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import type { RootState } from "../store";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../slices/searchSlice";
import { SearchState } from "../slices/searchSlice";
import Main from "../components/main";
import Auth from "../components/auth";
import userSlice, { UserState } from "../slices/userSlice";
import { setUser } from "../slices/userSlice";
import { useRouter } from "next/router";
import { isAbsolute } from "node:path/posix";




const Home: NextPage = () => {
  const { isLogin }: any = useSelector((state: UserState) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const authChecker = async () => {
      const local: any = localStorage.getItem("user");
      const loginUser = JSON.parse(local);
      if (loginUser) {
        dispatch(setUser(loginUser));
      } else {
        dispatch(setUser(null));
      }
    };

    authChecker();
  }, [isLogin]);

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  overflow-y-hidden h-screen">
      <Head>
        <title>Shopli</title>
        {/* <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
         */}
      </Head>

      <main className="flex w-full flex-1 flex-col overflow-y-hidden h-screen">
        {!isLogin ? <Auth /> : <Main />}

        {/* {!isLogin ? pusher("/auth") : pusher("/main")} */}
      </main>
    </div>
  );
};

export default Home;
