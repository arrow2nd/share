import { services } from "@/libs/services";
import { Params } from "@/types/params";
import Form from "./form";
import GitHubCorner from "./github-corner";
import HelpDialog from "./help-dialog";

type Props = {
  openHelpDialog: boolean;
} & Params;

export default function UI({ searchParams, openHelpDialog }: Props) {
  const service =
    services.find(({ name }) => name === searchParams.service?.toLowerCase()) ??
      services[0];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-200">
      {openHelpDialog && <HelpDialog />}
      <GitHubCorner
        href="https://github.com/arrow2nd/share"
        bannerColor="#3282F6"
        octoColor="#ffffff"
        size={80}
      />
      <Form
        defaultService={service}
        defaultServer={searchParams.server ?? ""}
        defaultText={searchParams.text ?? ""}
      />
    </main>
  );
}
