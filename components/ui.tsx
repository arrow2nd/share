import { services } from "@/libs/services";
import { Params } from "@/types/params";
import Form from "./form";
import GitHubCorner from "./github-corner";
import HelpDialog from "./help-dialog";

type Props = {
  openHelpDialog: boolean;
  searchParams: Params;
};

export default function UI({ searchParams, openHelpDialog }: Props) {
  const service =
    services.find(({ name }) => name === searchParams.service?.toLowerCase()) ??
    services[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 dark:bg-gray-950">
      {openHelpDialog && <HelpDialog />}
      <GitHubCorner
        href="https://github.com/arrow2nd/share"
        bannerColor="#3282F6"
        octoColor="#ffffff"
        size={80}
      />
      <Form
        service={service}
        serverDomain={searchParams.server ?? ""}
        text={searchParams.text ?? ""}
      />
    </main>
  );
}
