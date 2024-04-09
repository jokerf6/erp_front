import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LoadingButton from "@/components/default/loadingButton.component";

// Context
import UserStore from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/services/login";

export default function LoginForm(props: { setEmail: any }) {
  const router = useRouter();
  const { user, updateUser } = UserStore();
  const notify = async (error: string) => toast.error(error);

  const mutation = useMutation({
    mutationFn: (e: any) => {
      return LoginRequest(e, notify, router, props.setEmail, updateUser);
    },
  });
  console.log("/*/*/*/*/");
  console.log(user);
  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <div className=" flex gap-2 flex-col">
        <span className="text-primary-purple">Email</span>
        <input
          name="email"
          className="bg-transparent w-full text-primary-purple rounded-md focus:outline-none p-2 px-4 border-[1px] border-primary-purple"
          placeholder={"Your Email"}
        />
      </div>
      <div className=" flex gap-2 flex-col">
        <span className="text-primary-purple">Password</span>
        <input
          name="password"
          className="bg-transparent w-full rounded-md text-primary-purple focus:outline-none p-2 px-4 border-[1px] border-primary-purple"
          placeholder={"Your Password"}
          type="password"
        />
      </div>
      {/* <div className=" flex gap-2 items-center">
        <input
          type="checkbox"
          className=" bg-lite-white text-red-500 rounded-2xl w-[20px] h-[20px]"
        />
        <span className="text-primary-purple">Remember me</span>
      </div> */}
      {!mutation.isPending ? (
        <button
          type="submit"
          className="w-full bg-primary-purple text-primary-white font-b py-4 rounded-md  font-bold cursor-pointer hover:shadow-lg"
        >
          LOGIN
        </button>
      ) : (
        <LoadingButton />
      )}
      <div className=" w-full flex items-center justify-center">
        <Link
          href={"/forgetpassword"}
          className="text-primary-purple cursor-pointer underline text-main2 mt-8 w-fit text-center"
        >
          Forget Password ?
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
}
