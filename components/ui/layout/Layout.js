import Search from "../Search/search";
import Head from "next/head";
import SideBar from "../sidebar/sidebar";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Next Todo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>

      <main>
        <div className=" bg-gray-600  h-screen text-white  mx-auto grid place-items-center">
          <div className=" relative w-full h-full bg-gray-600 rounded-lg flex flex-row ">
            <Search />
            <SideBar />

            <div className="bg-gray-800 rounded-lg h-5/6 w-full  my-auto mr-10">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
