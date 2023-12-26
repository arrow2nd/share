import Form from "@/components/form";
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
      <Form
        defaultService={service}
        defaultServer={searchParams.server ?? ""}
        defaultText={searchParams.text ?? ""}
      />
    </main>
  );
}
