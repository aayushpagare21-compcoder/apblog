import { cn } from "@/lib/utils"; // assuming you have a `cn` util

export const StyledContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "[&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight",
      "[&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight",
      "[&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight",
      "[&_p]:leading-7 [&_p:not(:first-child)]:mt-6",
      "[&_ul]:my-6 [&_ul]:ml-6 [&_ul]:list-disc",
      "[&_ol]:my-6 [&_ol]:ml-6 [&_ol]:list-decimal",
      "[&_li]:mt-2",
      "[&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:pl-6 [&_blockquote]:italic",
      "[&_img]:rounded-md",
      "[&_hr]:my-8 [&_hr]:border-muted",
      "[&_table]:w-full [&_tr]:m-0 [&_tr]:border-t [&_tr]:p-0 [&_tr:nth-child(even)]:bg-muted",
      "[&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold [&_th[align=center]]:text-center [&_th[align=right]]:text-right",
      "[&_td]:border [&_td]:px-4 [&_td]:py-2 [&_td]:text-left [&_td[align=center]]:text-center [&_td[align=right]]:text-right",
      "[&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4",
      "[&_code]:relative [&_code]:rounded [&_code]:bg-muted [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:font-mono [&_code]:text-sm",
      className,
    )}
    {...props}
  />
);
