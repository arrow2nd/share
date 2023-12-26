import Form from "@/components/form";
import GitHubCorner from "@/components/github-corner";
import { services } from "@/libs/services";

type Props = {
  searchParams: {
    service?: string;
    server?: string;
    text?: string;
  };
};

export default function Home({ searchParams }: Props) {
  const service =
    services.find(({ name }) => name === searchParams.service?.toLowerCase()) ??
      services[0];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-200">
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
