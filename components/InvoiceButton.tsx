
import Link from "next/link";

export default function InvoiceButton() {
  return (
    <div>
      <Link
        href="/invoice"
        className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover text-black border bg-white hover:text-white">
        Create your Invoice
      </Link>

      
    </div>
  );
}
