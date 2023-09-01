import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineHome,
  HiTag,
} from "react-icons/hi2";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import TimeStamp from "@/components/Model/TimeStamp";
import Tag from "@/components/Model/Tag";

const content = `
# もっとついてくる。
## もっとついてくる。
### もっとついてくる。
#### もっとついてくる。
##### もっとついてくる。

ジョバンニはなぜかさあっと胸が冷たくなったようについていて、家庭教師にやとわれていたのです。だけどいい虫だわ蠍いい虫じゃないよあなたの神さまうその神さまよそうじゃないわよ。この傾斜があるもんですからなんでもかまわないうん。けどここ海じゃないんです。ほんとうにジョバンニは、白鳥と書いてあったよああだからお父さんはぼくをつれてカムパネルラのうちに寄った。ケンタウル祭の夜ジョバンニは、そのきれいな皮も、くるくるコルク抜きのような青白い光を出す鋼玉やらでした。けれどもいつかジョバンニの眼はまた泪でいっぱいになりました。向こうとこっちの岸に沿って進んでいました。そしてちらっと大きなとうもろこしの木を見ましたけれども追いつかなかったと言いました。そしてほんとうにその黒い測候所が、睡っているように、指をうごかしながら、手をジョバンニたちの方を見ると、そこらじゅうを見ているのでした。

- ジョバンニは、いつかまっすぐに立っていました。
- あとはもう、しずかに永久に立ってわらいました。
- 河原のいちばん下流の方へ走りました。

## まあ、あの烏カムパネルラのとなりの席を指さしました。

この汽車は、スティームや電気でうごいていました。いまとって来たってしかたがねえや、ばさばさのマントを着て、白い巾でつつんだ荷物を、二つにわかれました。ぼくはカムパネルラの行った方を知っていたんですって。どうしてわたしはわたしのからだを、だまって見ていました。こっちやこっちの方はなぜ手数なんですかどこまでもいっしょにうたいだしたのです。変な顔をしてくださいその人はしきりに赤い旗をふっていました。追いかけているんだったと考えてふり返って見ましたら、向こうの鼠いろの切符を出しました。ぼくはもう、しずかによこたわったのですか青年はほんとうにびっくりしたように見えたので、ジョバンニは、白鳥と書いてある。そうだ、ぼくの方を見ながらすわっていたのだと思っていたいろいろのことを考えているんだろうかいま海へ行ってらあいけないわよ。旅人たちはしずかに席にもたれて睡っていましたら、そこにお祭りでもあるというような気がしました。

1. インデアンはうれしそうに立っていました。
2. ジョバンニもそっちを見ていました。
3. いるかお魚でしょうか女の子が言いました。

<h2>Hello World</h2>

~~~typescript:test.ts
function echo(): void {
  console.log('Hello World');
}
~~~

![nature.jpg](http://localhost:3000/nature.jpg)

| 項目 | 値 |
| :-- | :-- |
| key1 | value1 |
| key2 | value2 |
| key3 | value3 |

`;

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    /**
     * Updates the width state with the current viewport width.
     */
    function getWidth() {
      setWidth(window.innerWidth);
    }

    // Attach event listener for window resize
    window.addEventListener("resize", getWidth);

    // Get initial width
    getWidth();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  const compressedStringByStringLength = (str: string, length: number) => {
    if (str.length >= 130) return `${str.slice(0, 130)}...`;
    if (width > 640) return str;
    return `${str.slice(0, length)}...`;
  };

  return (
    <>
      <header className="bg-blue-500">
        <div className="w-[90%] md:w-4/5 h-30 mx-auto py-8 flex justify-between items-center text-gray-100">
          <h1 className="text-xl md:text-4xl font-bold">
            <Link href={"/"}>テストサイト名</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link href={"/"} className="text-sm md:text-base lg:text-lg">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="w-[95%] md:w-4/5 mx-auto py-8">
          <h2 className="mb-2 md:mb-8 text-2xl md:text-4xl">最新の投稿</h2>
          <div className="mb-4 md:mb-8">
            <article className="border-b border-gray-300">
              <div className="p-2 md:p-4 flex items-center gap-x-4">
                <TimeStamp createdAt="2022/09/09" />
                <div className="flex flex-col gap-1">
                  <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                    カテゴリ
                  </Tag>
                  <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                    カテゴリ
                  </Tag>
                </div>
                <h3 className="text-gray-900 text-sm md:text-base lg:text-lg">
                  <Link href={"/"} className="py-1 block hover:underline">
                    Wordpress 記事一覧
                  </Link>
                </h3>
              </div>
            </article>
            <article className="border-b border-gray-300">
              <div className="p-2 md:p-4 flex items-center gap-x-4">
                <TimeStamp createdAt="2022/09/09" />
                <div className="flex gap-1">
                  <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                    カテゴリ
                  </Tag>
                </div>
                <h3 className="text-gray-900 text-sm md:text-base lg:text-lg">
                  <Link href={"/"} className="py-1 block hover:underline">
                    Wordpress 記事一覧
                  </Link>
                </h3>
              </div>
            </article>
            <article className="border-b border-gray-300">
              <div className="p-2 md:p-4 flex items-center gap-x-4">
                <TimeStamp createdAt="2022/09/09" />
                <div className="flex gap-1">
                  <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                    カテゴリ
                  </Tag>
                </div>
                <h3 className="text-gray-900 text-sm md:text-base lg:text-lg">
                  <Link href={"/"} className="py-1 block hover:underline">
                    Wordpress 記事一覧
                  </Link>
                </h3>
              </div>
            </article>
          </div>
          <ul className="mb-4 md:mb-8 flex justify-between items-center">
            <li className="pr-2 py-2 md:pl-1 md:pr-3 md:py-3 rounded-sm outline outline-1 outline-gray-500 gap-x-4 text-gray-700">
              <Link href={"/"} className="flex items-center gap-x-0 md:gap-x-2">
                <HiOutlineChevronLeft className="text-xl" />
                <h3 className="text-base md:text-xl">Prev Post</h3>
              </Link>
            </li>
            <li className="pl-2 py-2 md:pr-1 md:pl-3 md:py-3 rounded-sm bg-blue-500 text-gray-100">
              <Link href={"/"} className="flex items-center gap-x-0 md:gap-x-2">
                <h3 className="text-base md:text-xl">Next Post</h3>
                <HiOutlineChevronRight className="text-xl" />
              </Link>
            </li>
          </ul>
          <ul className="w-80 h-32 mb-4 md:mb-8 flex flex-col gap-y-1 overflow-y-scroll">
            <li>
              <a
                href="#"
                className="w-full px-2 py-1 block bg-gray-200 text-gray-500"
              >
                もっとついてくる。
              </a>
            </li>
            <li>
              <a href="#" className=" px-2 py-1block text-gray-500">
                もっとついてくる。
              </a>
            </li>
            <li>
              <a href="#" className=" px-2 py-1block text-gray-500">
                もっとついてくる。
              </a>
            </li>
            <li>
              <ul className="pl-6">
                <li>
                  <a href="#" className=" px-2 py-1block text-gray-500">
                    もっとついてくる。
                  </a>
                </li>
                <li>
                  <a href="#" className=" px-2 py-1block text-gray-500">
                    もっとついてくる。
                  </a>
                </li>
                <li>
                  <a href="#" className=" px-2 py-1block text-gray-500">
                    もっとついてくる。
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="px-2 py-1 block text-gray-500">
                もっとついてくる。
              </a>
            </li>
          </ul>
          <div className="mb-4 md:mb-8">
            <article className="mb-4 md:mb-8 cursor-pointer">
              <div className="flex items-center gap-x-4 md:gap-x-8">
                <div className="px-4 md:px-10 text-3xl md:text-5xl">
                  <Link href={"/"}>🦊</Link>
                </div>
                <div>
                  <h3 className="mb-2 md:mb-4 text-base md:text-2xl font-bold hover:underline">
                    <Link href={"/"} className="block">
                      もっとついてくる。
                    </Link>
                  </h3>
                  <div className="mb-2 md:mb-4 flex flex-col">
                    <TimeStamp isNeedMarginBottom createdAt="2022/09/09" />
                    <div className="flex gap-2 md:gap-x-4 md:gap-y-2">
                      <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                        カテゴリ
                      </Tag>
                    </div>
                  </div>
                  <p className="text-xs md:text-base">
                    {compressedStringByStringLength(
                      "この汽車は、スティームや電気でうごいていました。いまとって来たってしかたがねえや、ばさばさのマントを着て、白い巾でつつんだ荷物を、二つにわかれました。ぼくはカムパネルラの行った方を知っていたんですって。どうしてわたしはわたしのからだを、だまって見ていました。",
                      40,
                    )}
                  </p>
                </div>
              </div>
            </article>
            <article className="mb-4 md:mb-8 cursor-pointer">
              <div className="flex items-center gap-x-4 md:gap-x-8">
                <div className="w-full">
                  <h3 className="mb-2 md:mb-4 text-base md:text-2xl font-bold hover:underline">
                    <Link href={"/"} className="block">
                      もっとついてくる。
                    </Link>
                  </h3>
                  <div className="mb-2 md:mb-4 flex flex-col">
                    <TimeStamp isNeedMarginBottom createdAt="2022/09/09" />
                    <div className="flex gap-2 md:gap-x-4 md:gap-y-2">
                      <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                        カテゴリ
                      </Tag>
                      <Tag href="/" isNeedIcon colorClass="bg-gray-700">
                        カテゴリ
                      </Tag>
                    </div>
                  </div>
                  <p className="text-xs md:text-base">
                    {compressedStringByStringLength(
                      "この汽車は、スティームや電気でうごいていました。いまとって来たってしかたがねえや、ばさばさのマントを着て、白い巾でつつんだ荷物を、二つにわかれました。ぼくはカムパネルラの行った方を知っていたんですって。どうしてわたしはわたしのからだを、だまって見ていました。",
                      40,
                    )}
                  </p>
                </div>
              </div>
            </article>
            <article className="mb-4 md:mb-8 cursor-pointer">
              <div className="flex items-center gap-x-4 md:gap-x-8">
                <div className="px-4 md:px-10 text-3xl md:text-5xl">
                  <Link href={"/"}>🦊</Link>
                </div>
                <div className="w-full">
                  <h3 className="mb-2 md:mb-4 text-base md:text-2xl font-bold hover:underline">
                    <Link href={"/"} className="block">
                      もっとついてくる。
                    </Link>
                  </h3>
                  <div className="mb-2 md:mb-4 flex flex-col">
                    <TimeStamp isNeedMarginBottom createdAt="2022/09/09" />
                    <div className="flex gap-2 md:gap-x-4 md:gap-y-2">
                      <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                        カテゴリ
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="mb-4 md:mb-8 cursor-pointer">
              <div className="flex items-center gap-x-4 md:gap-x-8">
                <div className="w-full">
                  <h3 className="mb-2 md:mb-4 text-base md:text-2xl font-bold hover:underline">
                    <Link href={"/"} className="block">
                      もっとついてくる。
                    </Link>
                  </h3>
                  <div className="mb-2 md:mb-4 flex flex-col">
                    <TimeStamp isNeedMarginBottom createdAt="2022/09/09" />
                    <div className="flex gap-2 md:gap-x-4 md:gap-y-2">
                      <Tag href="/" isNeedIcon colorClass="bg-blue-500">
                        カテゴリ
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="mb-4 md:mb-8 flex justify-center items-center gap-x-4">
            <button className="w-8 h-8 md:w-12 md:h-12 p-1 inline-block rounded-sm outline outline-1 outline-gray-400">
              <HiOutlineChevronLeft className="mx-auto text-lg md:text-2xl" />
            </button>
            <button className="w-8 h-8 md:w-12 md:h-12 p-1 inline-block text-xs md:text-base rounded-sm bg-blue-500 text-gray-100">
              1
            </button>
            <button className="w-8 h-8 md:w-12 md:h-12 p-1 inline-block text-xs rounded-sm md:text-base outline outline-1 outline-gray-400">
              2
            </button>
            <button className="w-8 h-8 md:w-12 md:h-12 p-1 inline-block text-xs rounded-sm md:text-base outline outline-1 outline-gray-400">
              3
            </button>
            <button className="w-8 h-8 md:w-12 md:h-12 p-1 inline-block rounded-sm outline outline-1 outline-gray-400">
              <HiOutlineChevronRight className="mx-auto text-lg md:text-2xl" />
            </button>
          </div>
          <ul className="mb-4 md:mb-8 flex items-center">
            <li>
              <Link href={"/"}>
                <HiOutlineHome className="text-lg md:text-3xl text-gray-400" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <HiOutlineChevronRight className="text-base md:text-xl text-gray-400" />
            </li>
            <li className="cursor-pointer">
              <Link
                href={"/"}
                className="block text-xs md:text-base text-gray-400"
              >
                posts
              </Link>
            </li>
            <li className="cursor-pointer">
              <HiOutlineChevronRight className="text-base md:text-xl text-gray-400" />
            </li>
            <li className="text-xs md:text-base text-gray-400 font-bold cursor-pointer">
              テストサイト名
            </li>
          </ul>

          <div className="mb-4 md:mb-8 flex gap-2 md:gap-x-4 md:gap-y-2">
            <Tag href="/" isNeedIcon colorClass="bg-blue-500">
              カテゴリ
            </Tag>
            <Tag href="/" isNeedIcon colorClass="bg-transparent" isTextWhite>
              カテゴリ
            </Tag>
          </div>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, lang, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const fileName = match
                  ? className?.split(":")[1] ?? undefined
                  : undefined;

                return !inline && match ? (
                  <>
                    {fileName && (
                      <div className="flex items-center">
                        <div className="-mb-1 px-2 py-1 inline-block bg-gray-800 text-xs">
                          {fileName}
                        </div>
                      </div>
                    )}
                    <SyntaxHighlighter
                      {...props}
                      style={coldarkDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{ borderRadius: "0.125rem", margin: 0 }}
                    >
                      {children.toString().replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
              img({ node, ...props }) {
                return <img className="rounded-sm" {...props} />;
              },
              pre({ node, ...props }) {
                return <pre className="!p-0 bg-transparent" {...props} />;
              },
            }}
            className="prose prose-sm md:prose-base lg:prose-lg max-w-none"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-100">
        <div className="w-[90%] md:w-4/5 h-28 mx-auto py-8">
          <h3 className="text-xl">テストサイト名</h3>
        </div>
      </footer>
    </>
  );
}
