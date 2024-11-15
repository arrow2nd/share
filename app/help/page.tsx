import UI from "@/components/ui";
import { Params } from "@/types/params";

type Props = {
  searchParams: Promise<Params>;
};

export default async function Help(props: Props) {
  const searchParams = await props.searchParams;

  return <UI searchParams={searchParams} openHelpDialog={false} />;
}
