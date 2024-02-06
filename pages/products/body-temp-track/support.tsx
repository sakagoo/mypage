import { client } from "../../../libs/client";

export default function BodyTempTrackSupport({ product }:any) {
  return (
    <div>
      <h2>{product.name}</h2>
      <div dangerouslySetInnerHTML={{ __html:product.content}}>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "product",contentId:"body-temp-track" });
  //console.log(data.content)
  return {
    props: {
      product: data,
    },
  };
};