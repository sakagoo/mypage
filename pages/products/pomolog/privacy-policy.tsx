import { client } from "../../../libs/client";

export default function BodyTempTrackSupport({ product }:any) {
  return (
    <div>
      <h2>{product.name}</h2>
      <div dangerouslySetInnerHTML={{ __html:product["privacy-policy"]}}>
      </div>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "product",contentId:"pomolog" });
  //console.log(data["privacy-policy"])
  return {
    props: {
      product: data,
    },
  };
};