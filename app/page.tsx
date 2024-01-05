import UI from "@/components/ui";
import { Params } from "@/types/params";

export default function Home(props: Params) {
  return <UI {...props} openHelpDialog={false} />;
}
