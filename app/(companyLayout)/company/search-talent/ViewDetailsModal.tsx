import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Eye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

export function ViewDetailsModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer inline-flex items-center gap-2 bg-[#F9ECE9] text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-rose-200 transition">
            <Eye />
            View Details
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-lg md:max-w-lg lg:max-w-xl">
          <DialogHeader>
            <DialogTitle>View Profile</DialogTitle>
          </DialogHeader>

          <Image
            src="/images/cv.png"
            alt="Moni Roy"
            width={640}
            height={540}
            className="h-full w-full border border-gray-200"
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button className="bg-[#FF6041] hover:bg-[#fa3306]" type="submit">
              Save to Talent Pool
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
