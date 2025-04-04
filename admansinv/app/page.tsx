import Image from "next/image";
import MetaModal from "./components/MetaModal";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};




export default async function Home({ searchParams }: SearchParamProps) {

  const show = await searchParams;

  return (
    <>
     {show?.show && <MetaModal />}
    <div className="montserrat">
      <div className='flex [&>*]:flex justify-between px-7 py-3 m-5 text-xs rounded-md shadow-lg shadow-[rgba(119,119,119,0.08)] items-center'>

        <div className="font-semibold">ADAMS INVESTMENT</div>
        <div className="gap-5 [&>*]:rounded-md [&>*]:hover:bg-[rgba(0,0,0,0.1)] [&>*]:p-3 cursor-pointer [&>*]:transition">
          <div>Home</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </div>
        <div className="[&>*]:rounded-md  [&>*]:p-2 gap-2 [&>*]:cursor-pointer">
          <div className="shadow-[0_1px_rgba(0,0,0,.3)] bg-[rgba(128,128,128,0.19)]">Sign Up</div>
          <div className="bg-[#1e3d34] text-white font-medium"> <Link href="/?show=true">Login with metamask</Link> </div>
        </div>
      </div>
      <div className="text-center flex justify-center items-center  p-10 pb-0 flex-col ">
        <div className=" leading-relaxed font-normal text-5xl ">Invest In Real Assets, <br /> Your Way.</div>
        <div className="text-[12px] text-gray-500 mb-5">A mordern platform for investing in Money, Markets, bonds and Tokenized Equity <br /> using your card or crypto wallet</div>
        <div className="[&>*]:rounded-md  [&>*]:p-2 gap-2 [&>*]:cursor-pointer flex text-xs mb-7">
          <div className="shadow-[0_1px_rgba(0,0,0,.3)] bg-[rgba(128,128,128,0.19)]">Sign Up</div>
          <div className="bg-[#1e3d34] text-white font-medium"><Link href="/?show=true">Login with metamask</Link></div>
        </div>
        <div className="flex bg-gray-100 h-[50vh] w-[70vw] rounded-tr-lg rounded-tl-lg border-[rgba(0,0,0,.2)] border-4 border-b-0">
          <div>

          </div>
        </div>
      </div>
      <div className="w-full p-10 bg-gray-100 flex flex-col items-center [&>div>div]:bg-white [&>div>div]:border-[1px] [&>div>div]:border-gray-200 [&>div>div]:rounded-md [&>div>div]:p-5 [&>div]:flex [&>div]:gap-24">
        <div className="mb-10 text-2xl font-normal">Your Journey Starts Here </div>
        <div className="[&>div>div:nth-child(2)]:text-md [&>div>div:nth-child(2)]:font-semibold [&>div>div:nth-child(3)]:text-xs  [&>div>div:nth-child(3)]:leading-loose [&>div>div:nth-child(3)]:text-gray-600 [&>div>div:nth-child(1)]:w-[40px] [&>div>div:nth-child(1)]:h-[40px] [&>div>div:nth-child(1)]:bg-[rgba(247,115,115,0.66)] [&>div>div:nth-child(1)]:rounded-full [&>div]:flex [&>div]:flex-col [&>div]:gap-3 [&>div]:w-[27vw]">
          <div>
            <div></div>
            <div>
              Choose an Investment
            </div>
            <div>
              Pick from trusted options like Money Market,
              Bonds, or Equity. Each one shows how long it
              runs and what you'll earn.
            </div>
          </div>
          <div>
            <div></div>
            <div>
              Fund It Your Way
            </div>
            <div>
              Watch your returns grow.Reinvest
              automatically or withdraw when it's ready.
            </div>
          </div>
          <div>
            <div></div>
            <div>
              Track and Reinvest
            </div>
            <div>
              Watch your returns grow.Reinvest
              automatically or withdraw when it's ready.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-16 px-32 [&>div>div:nth-child(1)]:text-lg [&>div>div:nth-child(1)]:font-semibold [&>div>div:not(:nth-child(1))]:text-xs [&>div>div:not(:nth-child(1))]:leading-loose [&>div>div:not(:nth-child(1))]:text-gray-500">
        <div className="w-[40vw]">
          <div>About us</div>
          <div>
            We're building a modern investment platform that puts simplicity, transparency, and
            ccessibility at the core.
            hether you're investing in treasury bills, government bonds, or tokenized equity — we make
            it seamless, secure, and accessible to everyone.
            ur mission is to give individuals more control over how they grow their money — with the
            hoice to invest using a wallet or card, and the clarity to know exactly where their funds go.
            Real assets. Real returns. Your choice.
          </div>
        </div>
        <div>
          <div>Contact Us</div>
          <div>Have questions? We're happy to chat.</div>
          <div>Email : adamsinvestment.com</div>
        </div>
      </div>
      <div className="bg-[#1e3d34] p-24 text-white flex flex-col items-center  ">
        <div className="text-2xl font-semibold pb-12">ADAMS INVESTMENT</div>
        <div className="flex [&>div]:flex pt-12 justify-between  w-[70%] border-t-[1px] border-t-[rgba(255,255,255,.3)]">
          <div className="flex gap-6 [&>*]:cursor-pointer">
            <div>Home</div>
            <div>Contact Us</div>
            <div>About Us</div>
          </div>
          <div className="flex gap-5 font-semibold">
          <div>Contact us </div>
          <div>Email : adamsinvestment.com</div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
