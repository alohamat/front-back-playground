import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  interface RequestBody {
    message: string;
  }
  interface ResponseBody {
    message: string;
  }

  const [requestBody, setRequestBody] = useState<RequestBody>({ message: "" });
  const [postResponse, setPostRes] = useState<ResponseBody | null>();
  const [getResponse, setGetRes] = useState<ResponseBody | null>();

  async function handlePost() {
    try {
      const res = await axios.post("http://localhost:8080/postsum", {
        data: requestBody.message,
      });
      console.log(res.data);
      setPostRes(res.data);
    } catch (error: any) {
      console.error(error);
    }
  }
  async function handleGet() {
    try {
      const res = await axios.get("http://localhost:8080/getsum");
      console.log(res);
      setGetRes(res.data);
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-linear-to-bl animated-bg from-[#0f0c29] via-[#302b63] to-[#24243e]
"
    >
      <main className="solidglass h-[95%] w-[95%] flex flex-col">
        <div
          id="top-part"
          className="items-center flex gap-6 border-b-2 border-zinc-400"
        >
          <strong className="mr-auto text-zinc-100 text-xl">Dashboard</strong>
          <div>Aba1</div>
          <div>Aba2</div>
          <div>Aba3</div>
        </div>
        <div id="http-part" className="mt-10 border-2 border-zinc-400">
          <div id="top" className="flex justify-center">
            <strong className="">HTTP Methods</strong>
          </div>
          <div id="inside" className="flex flex-col gap-6">
            <div id="insidetop" className="flex">
              <article>
                <p className="text-zinc-300">POST request body:</p>
                <input
                  type="text"
                  className="bg-transparent border-2 border-zinc-400 text-white outline-0 rounded w-fit"
                  onChange={(e) => {
                    setRequestBody({ message: e.target.value });
                  }}
                />
              </article>
              <article className="ml-2 mt-2">
                <p>POST Returned: {postResponse && (postResponse.message)}</p>
                <p>GET Returned: {getResponse && (getResponse.message)}</p>
              </article>
            </div>
            <div className="gap-6 flex">
              <button
                className="size-15 rounded-full bg-indigo-600 cursor-pointer"
                onClick={handlePost}
              >
                POST
              </button>
              <button
                className="size-15 rounded-full bg-indigo-600 cursor-pointer"
                onClick={handleGet}
              >
                GET
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
