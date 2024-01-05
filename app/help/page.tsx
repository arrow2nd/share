import UI from "@/components/ui";
import { Params } from "@/types/params";

export default function Help(props: Params) {
  return <UI {...props} openHelpDialog={true} />;
}
