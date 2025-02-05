type id = { productId: string };
export default async function page({ params }: any) {
  let { productId } = await params;
  console.log(productId);
  console.log(await params);

  return <div>{productId}</div>;
}
