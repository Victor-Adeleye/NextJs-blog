import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl" style={{ color: "white" }}>
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
        style={{ color: "white" }}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1" style={{ color: "white" }}>
        {formattedDate}
      </p>
    </li>
  );
}
