import { Metadata } from "next"
import { FormProfile } from "./FormProfile"
import Link from "next/dist/client/link"

export const metadata: Metadata = {
  title: "Thông tin công ty",
  description: "Mô tả trang thông tin công ty...",
}

export default function CompanyManageProfilePage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
              <h1 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                Chỉnh sửa công việc
              </h1>
              <Link href="/" className="font-[400] text-[14px] text-[#0088FF] underline">
                Quay lại danh sách
              </Link>
            </div>
            <FormProfile />
          </div>
        </div>
      </div>
    </>
  )
}