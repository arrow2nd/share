import UI from "@/components/ui";
import { Params } from "@/types/params";

export default function Help(props: Params) {
  return (
    <UI /* @next-codemod-error 'props' is used with spread syntax (...). Any asynchronous properties of 'props' must be awaited when accessed. */
    {...props} openHelpDialog={true} />
  );
}
