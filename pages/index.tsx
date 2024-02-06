import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ products }:any) {
  return (
    <div>
      <h2>Daisuke Sakaguchi Products</h2>
      <h3>サポートサイト</h3>
      <ul>
        {products.map((product:any) => (
          <li key={product.id}>
          <Link href={`/products/${product.id}/support`}>{product.name}</Link>
        </li>
      ))}
      </ul>
      <h3>プライバシーポリシー</h3>
      <ul>
        {products.map((product:any) => (
          <li key={product.id}>
          <Link href={`/products/${product.id}/privacy-policy`}>{product.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "product" });
  console.log(data)
  return {
    props: {
      products: data.contents,
    },
  };
};