import { IoMail, IoCall } from "react-icons/io5";

export function Info() {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-2">
        <IoMail size={24} className="primary" />
        <p>kimkyeseung@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <IoCall size={24} className="primary" />
        <p>010-2848-9508</p>
      </div>
    </div>
  );
}
