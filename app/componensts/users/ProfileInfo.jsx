import Image from "next/image";
import { auth } from "../../../auth"

export default async function ProfileInfo() {

  const session = await auth();

  return (
    <div className='flex flex-col items-center py-8 text-center'>

       <div className='relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white'>

         {/* jode gmail dia login kore tahke tahle image pabo oi image ta dekhabo r jode credential dia login kore thake tahle image pabo na tokhn user name er first latter ta dekhabo */}
          {
            session?.user?.image ? (
              <Image
                src={session?.user?.image}
                alt="Profile image"
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              session?.user?.name?.charAt(0)
            )
          }
       </div>
       <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{session?.user?.name}</h3>
        <p className="leading-[231%] lg:text-lg">{session?.user?.email}</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  )
}
